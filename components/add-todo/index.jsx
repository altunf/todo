"use client";
import { useTodoContext } from "@/context";
import { useState } from "react";
import ToDo from "../todo";

const AddTodo = () => {
  const { todos, setTodos, filter, filterActive, filterCompleted } =
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

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };
  const handleDeleteAll = (index) => {
    setTodos(filterActive);
  };

  const allTasks = (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <ToDo todo={todo} index={index} />
        </div>
      ))}
    </>
  );

  const activeTasks = (
    <>
      {filterActive.map((todo, index) => (
        <div key={index}>
          <ToDo todo={todo} index={index} />
        </div>
      ))}
    </>
  );

  const completedTasks = (
    <>
      {filterCompleted.map((todo, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <ToDo todo={todo} index={index} />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleDelete(index);
            }}
          >
            x
          </span>
        </div>
      ))}
      <button
        onClick={() => setTodos(filterActive)}
        style={{ marginLeft: "113px" }}
      >
        x delete all
      </button>
    </>
  );

  return (
    <div>
      <form onSubmit={handleSabmit}>
        <input
          type="text"
          value={newTodo}
          required
          placeholder="add details"
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add</button>
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
