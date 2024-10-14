const request = require('supertest');
const app = require('../../server'); 

describe('Performance Testing', () => {
  it('should handle multiple concurrent translation requests', async () => {
    const numRequests = 100;
    const requests = [];

    for (let i = 0; i < numRequests; i++) {
      requests.push(
        request(app)
          .post('/api/translate')
          .send({ text: 'Hello', language: 'am' })
      );
    }

    const responses = await Promise.all(requests);
    responses.forEach(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});
