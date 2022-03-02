import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";

export const TodoList = () => {
  let todos = useSelector((state: RootState) => {
    return state.todos;
  });
  const renderedPosts = todos.map((todo: any) => (
    <div>
      <h3>hello</h3>
      <p>{todo.description}</p>
    </div>
  ));

  return <div>{renderedPosts}</div>;
};
