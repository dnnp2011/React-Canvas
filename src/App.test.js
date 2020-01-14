import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders canvas', () => {
  const { container } = render(<App />);
  const canvasElement = container.querySelector('canvas');
  expect(canvasElement).toBeInTheDocument();
});
