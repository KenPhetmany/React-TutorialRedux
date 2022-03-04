import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

const SingleTodo = ({ match }: { match: any }) => {
  const { todoId } = match.params;

  const todo = useSelector((state: RootState) =>
    state.todos.find((todo) => todo.id === todoId)
  );
  if (!todo) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

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
