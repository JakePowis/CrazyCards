import React from 'react';
import ReactDom from 'react-dom';
import WelcomeMessage from './WelcomeMessage.js'
import { render, cleanup } from '@testing-library/react';

import renderer from "react-test-renderer"

afterEach(cleanup)

test("Welcome Message Renders Correctly", ()=> {
    const div = document.createElement("div");
    ReactDom.render(<WelcomeMessage/>, div)
})

test('Renders page title', () => {
    const { getByText } = render(<WelcomeMessage/>);
    const divElement = getByText(/Welcome to Crazy Cards/i);
    expect(divElement).toBeInTheDocument();
  });

  test("matches snapshot", ()=> {

    const tree = renderer.create(<WelcomeMessage/>).toJSON()
    expect(tree).toMatchSnapshot();
})
  