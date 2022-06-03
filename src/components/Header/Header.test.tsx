import { render, screen } from '@testing-library/react';
import Header from './Header';

test('checking if header is rendered', () => {
  render(<Header />);
  const h1Element = screen.getByText(/unsplash gallery/i);
  expect(h1Element).toBeInTheDocument();
});
