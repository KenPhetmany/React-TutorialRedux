import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todoAdded } from "../../services/reducers/todo/todoSlice";
import { RootState } from "../../services/store";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const onTodoAdded = () => {
    if (title && description) {
      dispatch(todoAdded(title, description, userId));
      setTitle("");
      setDescription("");
    }
  };

  const canSave = Boolean(title) && Boolean(description) && Boolean(userId);

  const usersOptions = users.map((user: any) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
          <label htmlFor="postAuthor">Author:</label>
          <select
            id="postAuthor"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="postContent">Post Content:</label>
          <input
            type="text"
            id="postContent"
            name="postContent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={onTodoAdded} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </h2>
    </div>
  );
};

export default AddTodo;
