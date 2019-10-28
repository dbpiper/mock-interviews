import React from "react";
import "./TodoList.css";

export const TodoList = ({ todoList, removeItem }) => {
  return (
    <ul>
      {todoList.map((todoItem, index) => (
        <div key={index}>
          <li className="InputItem">{todoItem}</li>
          <button className="RemoveButton" onClick={() => removeItem(index)}>
            X
          </button>
        </div>
      ))}
    </ul>
  );
};
