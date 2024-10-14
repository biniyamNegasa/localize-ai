const translationService = require('../../src/services/translationService'); 

describe('Translation Service Unit Tests', () => {
  it('should return translated text for valid input', async () => {
    const result = await translationService.translate('Hello', 'am');
    expect(result).toBe('ሰላም');
  });

  it('should return an error for unsupported languages', async () => {
    try {
      await translationService.translate('Hello', 'invalid_language');
    } catch (error) {
      expect(error.message).toBe('Unsupported language');
    }
  });

  it('should return an error for empty text input', async () => {
    try {
      await translationService.translate('', 'am');
    } catch (error) {
      expect(error.message).toBe('Text cannot be empty');
    }
  });
});
