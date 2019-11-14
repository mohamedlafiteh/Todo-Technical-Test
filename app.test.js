const app = require("./app");
const request = require("supertest");

describe("Test End Point", () => {
  test("Response to Get end point", () => {
    return request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});
