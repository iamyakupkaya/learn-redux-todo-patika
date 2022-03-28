import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const initialState = {
  items: [
    { id: 1, title: "yakup", completed: true },
    { id: 2, title: "KAYA", completed: false },
  ],
  activeFilter: "all",
};
const TodoSlice = createSlice({
  name: "todos", // this name using in action type
  initialState, //this is initial state
  reducers: {
    // this is our action methods -dipatch methods area-
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      // when we dispatch a method first of all our dispatch argumans come to prepare after that it will go to action payload
      prepare: (payload) => {
        //prepare:({title})
        console.log("gelen payload: " + payload);
        const { title } = payload;
        return {
          //following payload is goign to add  to action payload.
          payload: {
            id: uuidv4(),
            title: title,
            completed: false,
          },
        };
      },
    },
    changeComplete: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.completed = !item.completed;
    },
    removeTodo: (state, action) => {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      state.items = newItems;
    },

    changeActive: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearAll: (state, action) => {
      state.items = state.items.filter((item) => !item.completed);
    },
  },
});

export const TodoReducer = TodoSlice.reducer;
export const { addTodo, changeComplete, removeTodo, changeActive, clearAll } =
  TodoSlice.actions;
