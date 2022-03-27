import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[{id:1, title:"yakup"}, {id:2, title:"KAYA"}],
};
const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{}
});


export const TodoReducer = TodoSlice.reducer;
