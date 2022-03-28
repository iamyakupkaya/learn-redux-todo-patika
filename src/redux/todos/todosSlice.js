import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, title: "yakup", completed: true },
    { id: 2, title: "KAYA", completed: false },
  ],
};
const TodoSlice = createSlice({
  name: "todos", // this name using in action type
  initialState, //this is initial state
  reducers: {
    // this is our action methods -dipatch methods area-
    addTodo: (state,action) => {
      state.items.push(action.payload);
      return state;
    },
  },
});

export const TodoReducer = TodoSlice.reducer;
export const { addTodo } = TodoSlice.actions;

/*






      */
