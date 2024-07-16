const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017";

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,  
      useUnifiedTopology: true,
    });
    
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
