const request = require('supertest');
const app = require('../../server');

describe('Edge Case Tests', () => {
  it('should return an error for empty text input', async () => {
    const response = await request(app)
      .post('/api/translate')
      .send({ text: '', language: 'am' });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Text cannot be empty');
  });

  it('should handle special characters in the input', async () => {
    const response = await request(app)
      .post('/api/translate')
      .send({ text: '!@#$%^&*', language: 'en' });

    expect(response.statusCode).toBe(200);
    expect(response.body.translatedText).toBe('!@#$%^&*'); // Expect special characters to remain unchanged
  });
});
