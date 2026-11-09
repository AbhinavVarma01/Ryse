import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the RYSE dashboard overview', () => {
  render(<App />);
  expect(screen.getByText(/good morning, jordan/i)).toBeInTheDocument();
  expect(screen.getAllByText(/adoption rate/i).length).toBeGreaterThan(0);
});
