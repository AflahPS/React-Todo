import React from "react";

export default function Todo({ todo, onToggleTodo }) {
  function handleTodoClick() {
    onToggleTodo(todo.id);
  }

  return (
    <div>
      <input
        className="form-check-inline form-che"
        type={"checkbox"}
        checked={todo.complete}
        onChange={handleTodoClick}
      />
      <label className="form-label form-check-label">
        <h4>{todo.name}</h4>
      </label>
    </div>
  );
}
