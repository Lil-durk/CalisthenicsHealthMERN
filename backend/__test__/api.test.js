import mongoose from "mongoose";
import request from "supertest";
import app from "../index";

describe("GET requests", () => {
  const newUser = {
    firstName: "JestTest1",
    lastName: "testLastName",
    email: "jest@test.nl",
    password: "jestTest123",
  };
  beforeAll(async () => {
    //set up the testUser
    await request(app).post("/users").send(newUser);
    console.log("GET request test user created!");
  });

  //Get all users
  it("should return all users (200)", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });

  it("Should return one user (200)", async () => {
    const response = await request(app).get(`/users/${newUser._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });

  afterAll((done) => {
    mongoose.disconnect();
    //delete the testUser
    request(app).delete(`/users/${newUser._id}`);
    console.log("GET request test user deleted!");
    done();
  });
});

describe("PUT requests", () => {
  const newUser = {
    _id: 0,
    firstName: "JestTest1",
    lastName: "testLastName",
    email: "jest@test.nl",
    password: "jestTest123",
  };
  beforeAll(async () => {
    //set up the testUser
    await request(app).post("/users").send(newUser);
    console.log("PUT request test user created!");
  });

  it("should update user if it exists", async () => {
    const updatedUser = await request(app)
      .put(`/users/${newUser._id}`)
      .send({ firstName: "DifferentFirstName" });
    //expect(updatedUser.body.firstName).toBe("DifferentFirstName");
    expect(updatedUser.statusCode).toBe(200);
    expect(updatedUser.body.error).toBe(undefined);
  });

  afterAll((done) => {
    mongoose.disconnect();
    //delete the testUser
    request(app).delete(`/users/${newUser._id}`);
    console.log("PUT reqest test user deleted!");
    done();
  });
});
