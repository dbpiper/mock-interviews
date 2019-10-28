import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleInputChange = event => setCurrentTodo(event.target.value);
  const handleFormSubmit = event => {
    event.preventDefault();

    setTodoList([...todoList, currentTodo]);
    setCurrentTodo("");
  };

  const removeTodo = index => {
    setTodoList([
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1, todoList.length)
    ]);
  };

  return (
    <div className="App">
      <TodoList todoList={todoList} removeItem={removeTodo}></TodoList>
      <Input
        value={currentTodo}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;
