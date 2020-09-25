import React from 'react';
import ReactDom from 'react-dom';
import WelcomeMessage from './WelcomeMessage.js'
import { render } from '@testing-library/react';

test("Welcome Message Renders Correctly", ()=> {
    const div = document.createElement("div");
    ReactDom.render(<WelcomeMessage/>, div)
})

test('Renders page title', () => {
    const { getByText } = render(<WelcomeMessage/>);
    const divElement = getByText(/Welcome to Crazy Cards/i);
    expect(divElement).toBeInTheDocument();
  });