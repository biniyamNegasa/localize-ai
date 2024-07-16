const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const geminiResponse = async (message) => {
  try {
    const result = await model.generateContent([message]);
    // console.log("Gemini API result:", result);

    if (
      !result.response ||
      !result.response.candidates ||
      result.response.candidates.length === 0
    ) {
      throw new Error(
        "Invalid response from Gemini AI API: No candidates found"
      );
    }

    const aiText = result.response.text(); // Adjust this based on the actual structure
    return aiText;
  } catch (e) {
    console.error("Error calling Gemini AI API:", e);
    throw new Error("Gemini AI API error");
  }
};

module.exports = {
  geminiResponse,
};
