import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const TodoList = () => {
  let todos = useSelector((state: RootState) => {
    return state.todos;
  });

  const renderedPosts = todos.map((todo) => (
    <article className="post-excerpt" key={todo.id}>
      <h3>{todo.title}</h3>
      <p className="post-content">{todo.description.substring(0, 100)}</p>
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
