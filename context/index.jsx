"use client";
import { createContext, useContext, useState } from "react";
import ToDo from "@/components/todo";

import "./style.css";
import { RxTrash } from "react-icons/rx";
import { montserrat600 } from "@/styles/fonts";

const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterActive = todos.filter((active) => active.completed === false);
  const filterCompleted = todos.filter((active) => active.completed === true);

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
        <div key={index} className="completed-div">
          <ToDo todo={todo} index={index} />
          <span
            className="span-style"
            onClick={() => {
              handleDelete(index);
            }}
          >
            <RxTrash />
          </span>
        </div>
      ))}
      <button
        onClick={() => setTodos(filterActive)}
        className={`${montserrat600.className} completed-button`}
      >
        <RxTrash /> delete all
      </button>
    </>
  );

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        filter,
        setFilter,
        todos,
        setTodos,
        allTasks,
        activeTasks,
        completedTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
