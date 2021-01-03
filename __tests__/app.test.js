const supertest = require("supertest");

const app = require("../src/app");

test("Health check", async () => {
  await supertest(app)
    .get("/api/health")
    .expect(200)
    .then((response) => {
      expect(response.text).toBe("Healthy");
    });
});
