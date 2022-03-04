import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const params = useParams();

  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id && params)
  );
  if (!todo) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onClick = () => {
    console.log(params);
  };
  return (
    <section>
      <article className="post">
        <h2>{todo.title}</h2>
        <p className="post-content">{todo.description}</p>
      </article>
    </section>
  );
};

export default SingleTodo;
