const connectDB = require("../server/config/db");

describe("Database Connection", () => {
  it("should connect to the database", async () => {
    await expect(connectDB()).resolves.not.toThrow();
  });
});
