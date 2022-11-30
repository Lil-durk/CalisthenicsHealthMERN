/**
 * @jest-environment jsdom
 */

// describe('Puppeteer Google example', () => {
//     beforeAll(async () => {
//       await page.goto('https://google.com');
//     });

//     it('should be titled "Google"', async () => {
//       await expect(page.title()).resolves.toMatch('Google');
//     });
//   });

// import React from 'react';
// import Home from '../src/components/Home';

// it('should get api data', async function(){
//   const response = new Home();
//   var data = await response.UseEffect();
//   expect(data.firstName[0].toEqual("Dirk"))
// })

import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
