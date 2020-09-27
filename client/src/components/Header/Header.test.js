import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header.js'
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from "react-test-renderer"

afterEach(cleanup)

test("Header Renders Correctly", ()=> {
    const div = document.createElement("div");
    ReactDom.render( <Router> <Header /></Router>, div)
})

test('Renders menu', () => {
    const { getByTestId } = render(
        <Router>
            <Header />
        </Router>);
    const divElement = getByTestId("menu");
    expect(divElement).toBeInTheDocument();
  });

  test("matches snapshot", ()=> {
    const tree = renderer.create(<Router> <Header /></Router>).toJSON()
    expect(tree).toMatchSnapshot();
})
  