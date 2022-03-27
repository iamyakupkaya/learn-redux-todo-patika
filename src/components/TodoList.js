import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const items = useSelector((state) => state.todos.items); //items is the array has todo objects.

  return (
    <React.Fragment>
      <ul className="todo-list">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <div className="view">
                <input id={item.id} className="toggle" type="checkbox" />
                <label htmlFor={item.id}>{item.title}</label>
                <button className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
