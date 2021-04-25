import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  handlerDeleteItem,
  handlerShowRemoveIcon,
  handlerHideRemoveIcon,
}) => {
  return (
    <div className="todo-list-container">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handlerShowRemoveIcon={handlerShowRemoveIcon}
            handlerHideRemoveIcon={handlerHideRemoveIcon}
            handlerDeleteItem={handlerDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
