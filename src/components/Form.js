import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");

  const todosFromStore = useSelector((state) => state.todos.items);
  console.log("Yaz gelen todo", todosFromStore);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), title: title, completed: false }));
    setTitle("");
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
