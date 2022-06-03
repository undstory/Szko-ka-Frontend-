import { render, screen } from '@testing-library/react';
import Form from './Form';


describe("Form component", () => {
test('checking if input are rendered', () => {
    const mockSetQuery = jest.fn()

  render(<Form setQuery={mockSetQuery} />);
  const inputElement = screen.getByPlaceholderText("Word...");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("type", "text");
});

})