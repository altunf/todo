"use client";
import { useTodoContext } from "@/context";
import { montserrat500 } from "../../styles/fonts";
import "./style.css";

const ToDo = ({ todo, index }) => {
  const { todos, setTodos } = useTodoContext();

  const handleCompleted = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="main-div">
      <input
        className="todo-input"
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompleted}
      />
      <span
        className={`${montserrat500.className} tasks`}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
    </div>
  );
};

export default ToDo;
