import React from "react";
import ReactDom from "react-dom";
import MainScreen from "./MainScreen.js";
import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("Main Screen Renders Correctly", () => {
  const div = document.createElement("div");
  ReactDom.render(<MainScreen />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<MainScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
