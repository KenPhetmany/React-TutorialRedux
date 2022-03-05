import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Test 1",
    description: "This is test 1",
    userId: "Ken Phetmany",
  },
  {
    id: "2",
    title: "Test 2",
    description: "This is test 2",
    userId: "Ken Phetmany",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<any>) {
        state.push(action.payload);
      },
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            user: userId,
          },
        };
      },
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
