import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoList from "./features/todoList/TodoList";
import AddTodo from "./features/addTodo/AddTodo";
import SingleTodo from "./features/singleTodo/SingleTodo";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo />
              <TodoList />
            </>
          }
        />
        <Route path="/todos/:todoId" element={<SingleTodo />} />
      </Routes>
    </div>
  );
}

export default App;
