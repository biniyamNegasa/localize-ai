require("dotenv").config();
const express = require("express");
const connectDB = require("./server/config/db");
const authRoutes = require("./server/routes/auth");
const chatRoutes = require("./server/routes/chat");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
