import React from "react";

const TodoItem = ({ id, title, completed }) => {
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={completed} />
          {title}
        </span>
        <button className="btn btn-danger">x</button>
      </div>
    </li>
  );
};

export default TodoItem;
