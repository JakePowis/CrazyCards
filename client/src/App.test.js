import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders "Find Card button"', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/find my perfect card/i);
  expect(buttonElement).toBeInTheDocument();
});


