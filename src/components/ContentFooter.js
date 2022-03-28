import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActive, clearAll } from "../redux/todos/todosSlice";
import {
  selectorTodoItems,
  selectorTodoActiveFilter,
} from "../redux/todos/Selectors";

const ContentFooter = () => {
  const items = useSelector(selectorTodoItems);
  //Array.filter return an array to provide condition
  let itemsCount = items.filter((item) => !item.completed).length; //if !item.complited is true it will add to array filter.

  const activeFilter = useSelector(selectorTodoActiveFilter);

  const dispatch = useDispatch();

  const clearAllCompleted = () => {
    dispatch(clearAll());
  };

  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsCount} </strong>
          Item{itemsCount > 1 && "s"} Left
        </span>

        <ul className="filters">
          <li>
            <a
              href="/#"
              onClick={() => dispatch(changeActive("all"))}
              className={activeFilter === "all" ? "selected" : null}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => dispatch(changeActive("active"))}
              className={activeFilter === "active" ? "selected" : null}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="/#"
              onClick={() => dispatch(changeActive("completed"))}
              className={activeFilter === "completed" ? "selected" : null}
            >
              Completed
            </a>
          </li>
        </ul>

        <button onClick={() => clearAllCompleted()} className="clear-completed">
          Clear completed
        </button>
      </footer>
    </React.Fragment>
  );
};

export default ContentFooter;
