/**
 * @jest-environment jsdom
 */

import React, { Component } from "react";
import { screen, render, container } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/components/Home";
import ApiService from "../src/components/Services/ApiService";
import { rest } from "msw";
import { setupServer } from "msw/node";

jest.mock("../src/components/Home.jsx", () => () => (
  <div id="mockHomeComponent">Hello Mocked Home Component</div>
));

describe("mock App tests", () => {
  test("mocked pages in App", () => {
    const { container } = render(<App />);
    console.log(container.outerHTML);
    const mockHomeComponent = container.querySelector("div#mockHomeComponent");

    //assert
    expect(mockHomeComponent).toBeInTheDocument();
  });
});

const userResponse = rest.get(API_BASE_URL, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        firstName: "John",
        lastName: "Johnsson",
        email: "john@johnsson.com",
        password: "johnny",
      },
    ])
  );
});

const handler = [userResponse];

const server = new setupServer(handler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("get API data", () => {
  test("should get API data", async () => {
    render(<ApiService />);
    const testItem = await screen.find.findByText("Testing testing test");
    expect(testItem).tobeVisible();
  });
});

// describe("Puppeteer Google example", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch("Google");
//   });
// });
