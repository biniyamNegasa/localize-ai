const request = require("supertest");
const express = require("express");
const app = require("../server"); // Import the Express app
const User = require("../server/models/user");
const { hashPassword } = require("../server/utils/auth");

beforeAll(async () => {
  await User.deleteMany(); // Clean up before tests
});

describe("User Registration and Login", () => {
  it("should register a new user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ name: "John Doe", email: "john@example.com", password: "password123" });

    expect(response.status).toBe(201);
    expect(response.body.data.email).toBe("john@example.com");
  });

  it("should not register a user with an existing email", async () => {
    await request(app)
      .post("/api/auth/register")
      .send({ name: "Jane Doe", email: "john@example.com", password: "password123" });

    const response = await request(app)
      .post("/api/auth/register")
      .send({ name: "Jane Doe", email: "john@example.com", password: "password123" });

    expect(response.status).toBe(200);
    expect(response.body.data.message).toBe("User already exists");
  });

  it("should log in a user", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "john@example.com", password: "password123" });

    expect(response.status).toBe(200);
    expect(response.body.data.email).toBe("john@example.com");
  });

  it("should not log in a user with invalid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "john@example.com", password: "wrongpassword" });

    expect(response.status).toBe(200);
    expect(response.body.data.message).toBe("Invalid email or password");
  });
});
