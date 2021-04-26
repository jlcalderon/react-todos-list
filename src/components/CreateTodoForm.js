import React from "react";
import "./CreateTodoForm.css";
const CreateTodoForm = ({ handlerSubmit, inputText, handlerSetInputText }) => {
  return (
    <form
      className="todo-form"
      onSubmit={(event) => {
        handlerSubmit(event);
      }}
    >
      <button type="submit" className="add-todo">
        Add to do
      </button>
      <input
        id="input-text"
        data-testid="input-text"
        type="text"
        value={inputText}
        onChange={(event) => {
          handlerSetInputText(event);
        }}
        placeholder="Type new todo here"
        className="new-todo-input"
      />
    </form>
  );
};

export default CreateTodoForm;
