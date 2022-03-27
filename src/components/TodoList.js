import React from 'react'

const TodoList = () => {
  return (
    <React.Fragment>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input id="as" className="toggle" type="checkbox" />
              <label htmlFor="as">Learn React</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy"></button>
            </div>
          </li>
        </ul>
    </React.Fragment>
  )
}

export default TodoList