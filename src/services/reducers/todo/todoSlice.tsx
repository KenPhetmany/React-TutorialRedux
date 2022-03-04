import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Test 1", description: "This is test 1" },
  { id: "2", title: "Test 2", description: "This is test 2" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoUpdated(state, action) {
      const { id, title, description } = action.payload;
      const existingTodo = state.find((post) => post.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;
      }
    },
  },
});

export const { todoAdded, todoUpdated } = todoSlice.actions;
export default todoSlice.reducer;
