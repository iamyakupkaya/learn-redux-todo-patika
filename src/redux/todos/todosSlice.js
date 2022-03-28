import { createSlice } from "@reduxjs/toolkit";

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
    addTodo: (state, action) => {
      state.items.push(action.payload);
      return state;
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
