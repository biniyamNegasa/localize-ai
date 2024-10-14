const request = require('supertest');
const app = require('../../server'); 

describe('API Integration Tests', () => {
  it('should return translation for valid input', async () => {
    const response = await request(app)
      .post('/api/translate')
      .send({ text: 'Hello', language: 'am' });

    expect(response.statusCode).toBe(200);
    expect(response.body.translatedText).toBe('ሰላም');
  });

  it('should return AI-generated content', async () => {
    const response = await request(app)
      .post('/api/generate')
      .send({ text: 'Explain AI', language: 'en' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('generatedText');
  });
});
