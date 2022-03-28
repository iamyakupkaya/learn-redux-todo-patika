import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeComplete, removeTodo} from "../redux/todos/todosSlice";

const TodoList = () => {
  const items = useSelector((state) => state.todos.items); //items is the array has todo objects.
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <ul className="todo-list">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={item.completed === true ? "completed" : null}
            >
              <div className="view">
                <input 
                  onChange={() => dispatch(changeComplete(item.id))}
                  id={item.id} 
                  checked={item.completed}
                  className="toggle" 
                  type="checkbox" />
                <label htmlFor={item.id}>{item.title}</label>
                <button 
                onClick={() => dispatch(removeTodo(item.id))}
                className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
