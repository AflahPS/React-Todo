import React from "react";

export default function Navbar({ todoList }) {
  const leftTodo = todoList.filter((el) => !el.complete).length;
  return (
    <nav className="navbar nav-tabs justify-content-around navbar-dark bg-dark px-5 mb-5">
      <h4 className="text-success">TO-DO APP</h4>
      <h4>
        <span className={setBadgeClass({ todoList })}>
          {leftTodo} Left to do..
        </span>
      </h4>
    </nav>
  );
  function setBadgeClass(todoList) {
    let classes = "badge bg-";
    classes += leftTodo.length > 0 ? "info" : "success";
    return classes;
  }
}
