"use client";
import { useTodoContext } from "@/context";
import { useState } from "react";
import { montserrat400, montserrat600 } from "@/styles/fonts";
import "./style.css";

const AddTodo = () => {
  const { todos, setTodos, filter, allTasks, activeTasks, completedTasks } =
    useTodoContext();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    setTodos([...todos, { task: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleSabmit = (event) => {
    event.preventDefault();
    handleAddTodo();
  };

  return (
    <div>
      <form className="form-style" onSubmit={handleSabmit}>
        <input
          className={`${montserrat400.className} input-style`}
          type="text"
          value={newTodo}
          required
          placeholder="add details"
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
          className={`${montserrat600.className} button-style`}
          type="submit"
        >
          Add
        </button>
      </form>
      <>
        {filter === "all" && allTasks}
        {filter === "active" && activeTasks}
        {filter === "completed" && completedTasks}
      </>
    </div>
  );
};

export default AddTodo;
