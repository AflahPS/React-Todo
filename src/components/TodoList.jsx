import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, onToggleTodo }) {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo onToggleTodo={onToggleTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
