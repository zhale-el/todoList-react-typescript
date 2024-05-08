import React from "react";
import Todo from "../todo/Todo";
import TodoForm from "../todoForm/TodoForm";
const TodoWrapper = () => {
  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      {/* Add New Todo Form */}
      <TodoForm />

      {/* display todos */}
      <Todo />
    </div>
  );
};

export default TodoWrapper;
