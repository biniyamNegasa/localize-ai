const request = require('supertest');
const app = require('../../server');

describe('Security Tests', () => {
  it('should prevent SQL injection attacks', async () => {
    const response = await request(app)
      .post('/api/translate')
      .send({ text: "'; DROP TABLE users;", language: 'en' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid input');
  });

  it('should prevent XSS attacks', async () => {
    const response = await request(app)
      .post('/api/translate')
      .send({ text: '<script>alert("XSS")</script>', language: 'en' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid input');
  });
});
