import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(addTodo({ title: title}));
      setTitle("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
};

export default Form;
