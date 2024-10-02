const request = require("supertest");
const express = require("express");
const app = require("../server");
const { geminiResponse } = require("../server/controllers/gemini");

jest.mock("../server/controllers/gemini"); // Mock the Gemini API response

describe("Chat Controller", () => {
  it("should translate and respond to a chat message", async () => {
    geminiResponse.mockResolvedValue("Translated response from AI"); // Mock the AI response

    const response = await request(app)
      .post("/api/chat")
      .send({ input: "ልጅዎ ዕድሜው ከደረሰ አንብበው" }); // Amharic message

    expect(response.status).toBe(200);
    expect(response.body.data.message).toBe("Translated response from AI");
  });

  it("should return an error for missing input", async () => {
    const response = await request(app).post("/api/chat").send({});

    expect(response.status).toBe(500);
    expect(response.body.data.message).toBe("An error occurred during chat processing.");
  });
});
