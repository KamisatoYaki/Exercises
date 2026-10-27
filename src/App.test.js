import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application controls', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/what is happening/i)).toBeInTheDocument();
});
