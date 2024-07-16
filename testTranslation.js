require("dotenv").config();
const {
  TranslateClient,
  TranslateTextCommand,
} = require("@aws-sdk/client-translate");

// Ensure environment variables are loaded
const AWS_REGION = process.env.AWS_REGION;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

if (!AWS_REGION || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
  console.error("Missing AWS configuration in environment variables.");
  process.exit(1);
}

// Create an AWS Translate client
const translate = new TranslateClient({
  region: AWS_REGION, // Explicitly set the region
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

const testTranslation = async (message) => {
  try {
    // Translate Amharic to English
    const translateToEnglishCommand = new TranslateTextCommand({
      Text: message,
      SourceLanguageCode: "am",
      TargetLanguageCode: "en",
    });
    const translatedToEnglish = await translate.send(translateToEnglishCommand);
    console.log("Translated to English:", translatedToEnglish.TranslatedText);

    // Translate English to Amharic
    const translateToAmharicCommand = new TranslateTextCommand({
      Text: translatedToEnglish.TranslatedText,
      SourceLanguageCode: "en",
      TargetLanguageCode: "am",
    });
    const translatedToAmharic = await translate.send(translateToAmharicCommand);
    console.log(
      "Translated back to Amharic:",
      translatedToAmharic.TranslatedText
    );
  } catch (err) {
    console.error("Error during translation:", err.message);
  }
};

// Test the function
testTranslation(
  "ልጅዎ ዕድሜው ከደረሰ አንብበው ከጨረሱ በኋላ ስለ አንድ ታሪክ በጥልቀት መወያየት ጠቃሚ ሊሆን ይችላል። ታሪኮች ኃይል አላቸው፣ እና ሊማሩ የሚችሉ ጊዜያት መሆናቸውን ማረጋገጥ ይችላሉ። እንደ ታዋቂው የተጠማው የቁራ ታሪክ ወይም በእንግሊዘኛ እንደ ስግብግብ የውሻ ታሪክ ያሉ የሞራል ታሪኮች ለልጆቻችን ጠቃሚ የህይወት ትምህርቶችን ሊያስተምሩ ይችላሉ እነዚህ ውይይቶች ከልጆችዎ ጋር እንዲተሳሰሩ እድል ይሰጡዎታል"
);
