import React from "react";
import "./Home.css";
const TodoItem = ({
  todo,
  handlerDeleteItem,
  handlerShowRemoveIcon,
  handlerHideRemoveIcon,
}) => {
  return (
    <li key={todo.id} className="list-group-item list-group-item-action">
      <div
        onMouseOver={(event) => {
          handlerShowRemoveIcon(todo.id);
        }}
        onMouseLeave={(event) => {
          handlerHideRemoveIcon(todo.id);
        }}
        className="row"
      >
        <div className="col-auto">
          <button
            id={`btn-${todo.id}`}
            data-id={todo.id}
            className="btn btn-dark hide-button"
            onClick={(event) => {
              handlerDeleteItem(event.target.getAttribute("data-id"));
            }}
          >
            <i
              data-id={todo.id}
              className="bi bi-trash-fill"
              onClick={(event) => {
                handlerDeleteItem(event.target.getAttribute("data-id"));
              }}
            ></i>
          </button>
        </div>
        <div className="col-auto">
          <h3>{todo.text}</h3>
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
