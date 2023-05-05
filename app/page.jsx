import AddTodo from "@/components/add-todo";
import Filter from "@/components/filter";

export default function Home() {
  return (
    <div>
      <Filter />
      <AddTodo />
    </div>
  );
}
