import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    title: "Test 1",
    description: "This is test 1",
    reactions: [""],
    userId: "Ken Phetmany",
  },
  {
    id: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    title: "Test 2",
    description: "This is test 2",
    reactions: [""],
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
            date: new Date().toISOString(),
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
    reactionAdded(state, action: PayloadAction<any>) {
      const { todoId, reaction } = action.payload;
      const existingPost = state.find((todo) => todo.id && todoId);
      // if (existingPost) {
      // existingPost.reactions[reaction]++;
      // }
    },
  },
});

export const { todoAdded, todoUpdated, reactionAdded } = todoSlice.actions;
export default todoSlice.reducer;
