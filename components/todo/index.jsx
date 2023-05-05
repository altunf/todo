"use client";
import { useTodoContext } from "@/context";

const ToDo = ({ todo, index }) => {
  const { todos, setTodos } = useTodoContext();

  const handleCompleted = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompleted}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
    </div>
  );
};

export default ToDo;
