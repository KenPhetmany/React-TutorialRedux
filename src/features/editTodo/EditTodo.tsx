import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { todoUpdated } from "../../services/reducers/todo/todoSlice";
import { RootState } from "../../services/store";

const EditTodo = () => {
  const params = useParams();
  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id && params)
  );
  const [title, setTitle] = useState(todo?.title);
  const [description, setDescription] = useState(todo?.description);
  const dispatch = useDispatch();

  const onSaveTodo = () => {
    if (title && description) {
      dispatch(todoUpdated({ id: params, title, description }));
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <label htmlFor="todoTitle"></label>
      <input
        type="text"
        id="todoTitle"
        name="todoTitle"
        placeholder="What's on your mind?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="todoDescription"></label>
      <textarea
        name="todoDescription"
        id="todoDescription"
        value={description}
        onChange={(e) => setDescription(description)}
      />
      <button type="button" onClick={onSaveTodo}>
        Save Post
      </button>
    </section>
  );
};

export default EditTodo;
