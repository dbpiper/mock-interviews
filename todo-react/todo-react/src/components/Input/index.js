import React from "react";

export const Input = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="addTodo"></label>
    <input value={value} name="addTodo" type="text" onChange={onChange}></input>
  </form>
);
