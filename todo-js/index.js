import { TodoItem } from './TodoItem.js';

const addTodo = document.querySelector('#addTodo');
const addTodoForm = document.querySelector('#addTodoForm');
const todoList = document.querySelector('#todoList');

const todos = [];

const todoClick = (key) => {
  todos.splice(key, 1);
  render();
};

export const render = () => {
  const todosHtml = todos.map((value, index) => 
    TodoItem({ handleClick: todoClick, key: index, data: value}).render());
  const todoListHtml = todosHtml.join('\n');

  todoList.innerHTML = todoListHtml;
};

addTodoForm.onsubmit = (e) => {
  e.preventDefault();
  todos.push(addTodo.value);
  addTodo.value = '';
  render();
};
