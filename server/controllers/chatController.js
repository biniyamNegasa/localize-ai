const axios = require("axios");
const { geminiResponse } = require("./gemini.js");
const {
  TranslateClient,
  TranslateTextCommand,
} = require("@aws-sdk/client-translate");

// AWS Translate API Configuration
const translateClient = new TranslateClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const translateText = async (text, sourceLang, targetLang) => {
  try {
    const command = new TranslateTextCommand({
      Text: text,
      SourceLanguageCode: sourceLang,
      TargetLanguageCode: targetLang,
    });
    const response = await translateClient.send(command);
    return response.TranslatedText;
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Translation error");
  }
};

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      throw new Error("Message is required in the request body");
    }

    console.log("Received message:", message);

    // Translate the message from Amharic to English
    const translatedText = await translateText(message, "am", "en");
    console.log("Translated text:", translatedText);

    // Get the response from Gemini AI API
    const aiResponse = await geminiResponse(translatedText);
    console.log("AI response:", aiResponse);

    // Translate the response from English to Amharic
    const backTranslatedText = await translateText(aiResponse, "en", "am");
    console.log("Back translated text:", backTranslatedText);

    // Send the response back to the frontend
    res.json({ response: backTranslatedText });
  } catch (error) {
    console.error(
      "Error during chat processing:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: "An error occurred during chat processing." });
  }
};

module.exports = { chat };
