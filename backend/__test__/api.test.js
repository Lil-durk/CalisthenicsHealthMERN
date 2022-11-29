import mongoose from "mongoose";
import request from "supertest";
import app from "../index";
import { MongoClient } from "mongodb";

describe("GET requests", () => {
  let connection;
  let db;
  let server;
  let mockUser;
  // const newUser = {
  //   firstName: "JestTest1",
  //   lastName: "testLastName",
  //   email: "jest@test.nl",
  //   password: "jestTest123",
  // };
  beforeAll(async () => {
    server = await app.listen(3003);
    connection = await MongoClient.connect(
      "mongodb+srv://admin:admin123@calisthenicshealthdb.ntpusti.mongodb.net/users",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    db = await connection.db("users");
    const users = db.collection("users");
    mockUser = {
      firstName: "John",
      lastName: "Johnsson",
      email: "john@johnsson.com",
      password: "johnny",
    };
    await users.insertOne(mockUser);
    //set up the testUser
    // await request(app).delete("/users");
    // await request(app).post("/users").send(newUser);

    //console.log("POST request test user created!");
  });

  //Get all users
  it("should return all users (200)", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
    console.log(response._body);
    expect(response.body.length).toBe(1);
    expect(response.body.error).toBe(undefined);
  });

  it("Should return one user (200)", async () => {
    const response = await request(app).get(`/users/${mockUser._id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });

  afterAll(async () => {
    await db.collection("users").deleteOne({ "_id" : mockUser._id });
    await connection.close();
    mongoose.disconnect();
    await server.close();

    //delete the testUser

    console.log("DELETE request test user deleted!");
  });
});

describe("PUT requests", () => {
  let connection;
  let db;
  let server;
  let mockUser;
  // const newUser = {
  //   _id: 0,
  //   firstName: "JestTest1",
  //   lastName: "testLastName",
  //   email: "jest@test.nl",
  //   password: "jestTest123",
  // };
  beforeAll(async () => {
    server = await app.listen(3004);
    connection = await MongoClient.connect(
      "mongodb+srv://admin:admin123@calisthenicshealthdb.ntpusti.mongodb.net/users",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    db = await connection.db("users");
    const users = db.collection("users");
    mockUser = {
      _id: 0,
      firstName: "John",
      lastName: "Johnsson",
      email: "john@johnsson.com",
      password: "johnny",
    };
    await users.insertOne(mockUser);
  });

  it("should update user if it exists", async () => {
    const updatedUser = await request(app)
      .put(`/users/${mockUser._id}`)
      .send({ firstName: "DifferentFirstName" });
    //expect(updatedUser.body.firstName).toBe("DifferentFirstName");
    console.log(updatedUser._body);
    expect(updatedUser.statusCode).toBe(200);
    expect(updatedUser.body.error).toBe(undefined);
  });

  afterAll(async () => {
    await db.collection("users").deleteOne({ "_id" : mockUser._id });
    await connection.close();
    mongoose.disconnect();
    await server.close();
  });
});

// const request = require("supertest");
// const app = require("../index");

// describe("GET /", () => {
//   it("responds with CalisthenicsHealth is running on port 3003", (done) => {
//     request(app).get("/").expect("CalisthenicsHealth is running on port 3003", done);
//   });
// });
