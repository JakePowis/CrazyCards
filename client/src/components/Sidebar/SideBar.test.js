import React from 'react';
import ReactDom from 'react-dom';
import Sidebar from './Sidebar.js'
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from "react-test-renderer"

afterEach(cleanup)

test("Sidebar Renders Correctly", ()=> {
    const div = document.createElement("div");
    ReactDom.render( <Router> <Sidebar /></Router>, div)
})

test('Renders close button', () => {
    const { getByTestId } = render(
        <Router>
            <Sidebar />
        </Router>);
    const divElement = getByTestId("close");
    expect(divElement).toBeInTheDocument();
  });

  test("matches snapshot", ()=> {
    const tree = renderer.create(<Router> <Sidebar /></Router>).toJSON()
    expect(tree).toMatchSnapshot();
})
  