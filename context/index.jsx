"use client";

import { createContext, useContext, useState } from "react";

const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filterActive = todos.filter((active) => active.completed === false);

  const filterCompleted = todos.filter((active) => active.completed === true);

  return (
    <TodoContext.Provider
      value={{
        filter,
        setFilter,
        todos,
        setTodos,
        filterActive,
        filterCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
