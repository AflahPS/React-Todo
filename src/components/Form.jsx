import React from "react";

export default function Form({
  onAddTodo,
  todoName,
  onClearAll,
  onClearCompleted,
}) {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <div className="col-6">
          <input ref={todoName} className="form-control" type="text" />
          <div className="d-flex justify-content-around">
            <button onClick={onAddTodo} className="btn btn-primary my-3">
              Add To-Do
            </button>
            <button onClick={onClearCompleted} className="btn btn-warning my-3">
              Clear Completed
            </button>
            <button onClick={onClearAll} className="btn btn-danger my-3">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
