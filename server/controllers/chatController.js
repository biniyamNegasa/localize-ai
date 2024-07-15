const { OpenAI } = require("openai");
const translate = require("../config/awsConfig");

// Initialize the OpenAI client with the API key from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.chat = async (req, res) => {
  const { message } = req.body;

  try {
    // Translate Amharic to English using AWS Translate
    const paramsToEnglish = {
      Text: message,
      SourceLanguageCode: "am",
      TargetLanguageCode: "en",
    };
    const translatedMessage = await translate
      .translateText(paramsToEnglish)
      .promise();

    // Get response from OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: translatedMessage.TranslatedText }],
      max_tokens: 150, // Adjust this value if needed
    });

    const chatResponse = response.choices[0].message.content.trim();

    // Translate English response back to Amharic using AWS Translate
    const paramsToAmharic = {
      Text: chatResponse,
      SourceLanguageCode: "en",
      TargetLanguageCode: "am",
    };
    const translatedResponse = await translate
      .translateText(paramsToAmharic)
      .promise();

    res.json({ response: translatedResponse.TranslatedText });
  } catch (err) {
    if (err.response && err.response.status === 429) {
      res
        .status(429)
        .json({
          message:
            "You have exceeded your OpenAI API quota. Please upgrade your plan or try again later.",
        });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
};
