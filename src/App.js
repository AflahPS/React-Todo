import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const LOCAL_KEY = "todoApp.todo";

function App() {
  const [todo, setTodo] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (storedTodo) setTodo(storedTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todo));
  }, [todo]);

  return (
    <React.Fragment>
      <Navbar todoList={todo} />
      <div className="container">
        <Form
          todoName={todoNameRef}
          onAddTodo={handleAddTodo}
          onClearCompleted={handleClearCompleted}
          onClearAll={handleClearAll}
          todoList={todo}
        />
        <div className="row justify-content-center">
          <div className="col-6">
            <TodoList onToggleTodo={toggledTodos} todoList={todo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return console.log(name);
    setTodo((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: prevTodos.length + 1,
          name: name,
          complete: false,
        },
      ];
    });
  }

  function handleClearCompleted() {
    const newTodos = [...todo];
    const incompletedTodos = newTodos.filter((todo) => !todo.complete);
    setTodo(incompletedTodos);
  }

  function toggledTodos(id) {
    const newTodos = [...todo];
    const curTodo = newTodos.find((todo) => todo.id === id);
    curTodo.complete = !curTodo.complete;
    setTodo(newTodos);
  }

  function handleClearAll() {
    setTodo([]);
  }
}

export default App;
