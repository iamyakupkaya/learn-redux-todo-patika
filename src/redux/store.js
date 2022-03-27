import { configureStore } from "@reduxjs/toolkit";
import {TodoReducer} from "./todos/todosSlice";

const store = configureStore({
    reducer:{
        todos:TodoReducer,
    }
});

export default store;