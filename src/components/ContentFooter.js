import React from "react";

const ContentFooter = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="/#" className="selected">All</a>
          </li>
          <li>
            <a href="/#">Active</a>
          </li>
          <li>
            <a href="/#">Completed</a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </React.Fragment>
  );
};

export default ContentFooter;
