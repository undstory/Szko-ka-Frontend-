import { render, screen } from '@testing-library/react';
import Home from './Home';


describe("Home component", () => {
test('checking if images are rendered', () => {
  render(<Home />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});
test('checking if button are rendered', () => {
    render(<Home />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
})