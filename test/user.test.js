const mongoose = require("mongoose");
const User = require("../server/models/user");

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/test_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User Model", () => {
  it("should create a new user", async () => {
    const user = new User({ name: "Alice", email: "alice@example.com", password: "password123" });
    const savedUser = await user.save();
    
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe("alice@example.com");
  });

  it("should not create a user with duplicate email", async () => {
    const user = new User({ name: "Bob", email: "alice@example.com", password: "password123" });
    
    await expect(user.save()).rejects.toThrow();
  });
});
