import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todoAdded } from "../../services/reducers/todo/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const onTodoAdded = () => {
    if (title && description) {
      dispatch(
        todoAdded({
          id: nanoid(),
          title,
          description,
        })
      );

      setTitle("");
      setDescription("");
    }
  };
  return (
    <div>
      <h2>
        <form action="submit">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postContent">Post Content:</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={onTodoAdded}>
            Save Post
          </button>
        </form>
      </h2>
    </div>
  );
};

export default AddTodo;
