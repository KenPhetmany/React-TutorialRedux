import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { Link } from "react-router-dom";
import { AddAuthor } from "../addAuthor/AddAuthor";
const TodoList = () => {
  let todos = useSelector((state: RootState) => {
    return state.todos;
  });

  const renderedPosts = todos.map((todo) => (
    <article className="post-excerpt" key={todo.id}>
      <h3>{todo.title}</h3>
      <p className="post-content">{todo.description.substring(0, 100)}</p>
      <AddAuthor userId={todo.userId} />
      <Link to={`/todos/${todo.id}`}>View Post</Link>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default TodoList;
