export const selectorTodoFilteredItems = (state) => {
  if (state.todos.activeFilter === "all") {
    console.log("yaz state in slice:", state.todos.activeFilter);
    return state.todos.items;
  } else {
    return state.todos.items.filter((item) => {
      return state.todos.activeFilter === "active"
        ? item.completed === false
        : item.completed === true;
    });
  }
};

export const selectorTodoItems = (state) => state.todos.items;
export const selectorTodoActiveFilter = (state) => state.todos.activeFilter;
