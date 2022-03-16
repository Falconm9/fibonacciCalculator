import { render, screen } from '@testing-library/react';
import App from './App';

test('render headerApp', () => {
  render(<App />);
  const headerApp = screen.getByTestId("headerApp");
  expect(headerApp).toBeInTheDocument();
});
