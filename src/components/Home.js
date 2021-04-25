import React, { useState } from "react";
import CreateTodoForm from "./CreateTodoForm";
import "./Home.css";
import TodoList from "./TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("input-text").value !== "") {
      const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
      setTodos([...todos, { id: id, text: inputText }]);
      setInputText("");
    }
  };

  const handlerSetInputText = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handlerDeleteItem = (id) => {
    const newTodosList = todos.filter((todo) => todo.id !== parseInt(id, 10));
    setTodos(newTodosList);
  };

  const handlerShowRemoveIcon = (id) => {
    document.getElementById(`btn-${id}`).classList.remove("hide-button");
    document.getElementById(`btn-${id}`).classList.add("show-button");
  };

  const handlerHideRemoveIcon = (id) => {
    document.getElementById(`btn-${id}`).classList.remove("show-button");
    document.getElementById(`btn-${id}`).classList.add("hide-button");
  };

  return (
    <div className="container">
      <CreateTodoForm
        handlerSubmit={handlerSubmit}
        inputText={inputText}
        handlerSetInputText={handlerSetInputText}
      />
      <TodoList
        todos={todos}
        handlerDeleteItem={handlerDeleteItem}
        handlerShowRemoveIcon={handlerShowRemoveIcon}
        handlerHideRemoveIcon={handlerHideRemoveIcon}
      />
    </div>
  );
};
export default Home;
