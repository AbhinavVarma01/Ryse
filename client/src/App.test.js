import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the RYSE dashboard overview', () => {
  render(<App />);
  expect(screen.getByText(/hello abhinav/i)).toBeInTheDocument();
  expect(screen.getByText(/total registered users/i)).toBeInTheDocument();
  expect(screen.getByText(/customer adoption/i)).toBeInTheDocument();
});
