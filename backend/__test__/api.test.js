import mongoose from "mongoose";
import request from "supertest";
import app from "../index";

describe("CRUD", () => {
  const newUser = {
    _id: 5325783289,
    firstName: "JestTest1",
    lastName: "testLastName",
    email: "jest@test.nl",
    password: "jestTest123",
  };
  beforeAll(async () => {
    //set up the testUser
    await request(app).post("/users").send(newUser);
    console.log("Test user created!")
  });

  //Get all users
  it("should return all users (200)", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });

  it("Should return one user (200)", async () =>{
    const response = await request(app).get(`/users/${newUser._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  })

  afterAll((done) => {
    mongoose.disconnect();
    //delete the testUser
    request(app).delete(`/users/${newUser._id}`);
    console.log("Test user deleted!")
    done();
  });
});
