import React from "react";
import ReactDom from "react-dom";
import Footer from "./Footer.js";
import { render, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

afterEach(cleanup);

test("Footer Renders Correctly", () => {
  const div = document.createElement("div");
  ReactDom.render(<Footer />, div);
});

test("matches snapshot", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
