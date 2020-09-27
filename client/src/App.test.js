import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('Renders "Find Card button"', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/find my perfect card/i);
  expect(buttonElement).toBeInTheDocument();
});


