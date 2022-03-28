import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeComplete, removeTodo } from "../redux/todos/todosSlice";

let filtredItems = [];
const TodoList = () => {
  const items = useSelector((state) => state.todos.items); //items is the array has todo objects.
  const activeItems = useSelector((state) => state.todos.activeFilter);

  const dispatch = useDispatch();


  filtredItems = items;
  console.log("filktred items", filtredItems)
  // if activeItems is not "all" it means activeItems is "active" or "completed". if it is all
  //it won't enter in if block, if it is active it will enter in if block and items will be filtred
  // if active that means completed is false because it is still active.
  if (activeItems !== "all") {
    filtredItems = items.filter((item) => {
      return activeItems === "active"
        ? item.completed === false
        : item.completed === true
    });
  }
  return (
    <React.Fragment>
      <ul className="todo-list">
        {filtredItems.map((item) => {
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
                  type="checkbox"
                />
                <label htmlFor={item.id}>{item.title}</label>
                <button
                  onClick={() => dispatch(removeTodo(item.id))}
                  className="destroy"
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;

/*

paste following code in <ul></ul> for active-all-complted :)

{items.length > 0 && activeItems === "all"
          ? items.map((item) => {
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
                      type="checkbox"
                    />
                    <label htmlFor={item.id}>{item.title}</label>
                    <button
                      onClick={() => dispatch(removeTodo(item.id))}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              );
            })
          : null}
          {items.length > 0 && activeItems === "active"
          ? items.map((item) => {
              return (
                item.completed === false 
                ?
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
                      type="checkbox"
                    />
                    <label htmlFor={item.id}>{item.title}</label>
                    <button
                      onClick={() => dispatch(removeTodo(item.id))}
                      className="destroy"
                    ></button>
                  </div>
                </li> 
                :
                 null
              );
            })
          : null}
          {items.length > 0 && activeItems === "completed"
          ? items.map((item) => {
              return (
                item.completed === true 
                ?
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
                      type="checkbox"
                    />
                    <label htmlFor={item.id}>{item.title}</label>
                    <button
                      onClick={() => dispatch(removeTodo(item.id))}
                      className="destroy"
                    ></button>
                  </div>
                </li> 
                :
                 null
              );
            })
          : null}

  
*/
