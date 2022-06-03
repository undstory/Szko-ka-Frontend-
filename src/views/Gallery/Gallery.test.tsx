import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';


describe("Gallery component", () => {
test('checking if  button is rendered', () => {


  render(<Gallery />);
  const buttonElement = screen.getByText("Back to home");

  expect(buttonElement).toBeInTheDocument();

});

})