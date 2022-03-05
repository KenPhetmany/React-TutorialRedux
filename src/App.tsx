import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import TodoList from "./features/todoList/TodoList";
import AddTodo from "./features/addTodo/AddTodo";
import SingleTodo from "./features/singleTodo/SingleTodo";
import EditTodo from "./features/editTodo/EditTodo";
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
        <Route path="/editTodo/:todoId" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
