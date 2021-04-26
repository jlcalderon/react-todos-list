import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the initial App screen correctly", () => {
  render(<App />);
  const CreateTodoForm = screen.getByText("Add to do");
  expect(CreateTodoForm).toBeInTheDocument();
});
