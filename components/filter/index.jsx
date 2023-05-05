"use client";
import { useTodoContext } from "@/context";
import "./style.css";

const Filter = () => {
  const { filter, setFilter } = useTodoContext();

  const all = filter === "all" ? "filter-button2" : "filter-button1";
  const active = filter === "active" ? "filter-button2" : "filter-button1";
  const completed =
    filter === "completed" ? "filter-button2" : "filter-button1";

  return (
    <>
      <div className="filter-div">
        <button className={all} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={active} onClick={() => setFilter("active")}>
          Active
        </button>
        <button className={completed} onClick={() => setFilter("completed")}>
          Completed
        </button>
      </div>
    </>
  );
};

export default Filter;
