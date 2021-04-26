import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateTodoForm from "./CreateTodoForm";

test("Renders the CreateTodoForm correctly", () => {
  const queryById = () => render(<CreateTodoForm />);
  expect(queryById("todo-form")).toBeTruthy();
});
