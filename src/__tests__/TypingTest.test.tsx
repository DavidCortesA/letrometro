import { render, screen, fireEvent } from "@testing-library/react";
import TypingTest from "@/app/typetest/page";

test("renders TypingTest component", () => {
  render(<TypingTest />);
  const inputElement = screen.getByPlaceholderText(/start typing/i);
  expect(inputElement).toBeInTheDocument();
});

test("completes the typing test", () => {
  render(<TypingTest />);
  const inputElement = screen.getByPlaceholderText(/start typing/i);
  
  fireEvent.change(inputElement, { target: { value: "Escribe este texto lo más rápido posible." } });
  
  const finishButton = screen.getByText(/finish/i);
  fireEvent.click(finishButton);

  const resultElement = screen.getByText(/Your time/i);
  expect(resultElement).toBeInTheDocument();
});
