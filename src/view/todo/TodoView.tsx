import { Todo } from "@/model/todo";

export interface TodoViewProps {
  todo: Todo;
}

export default function TodoView({ todo }: TodoViewProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <p>{todo.title}</p>
      <input type="checkbox" checked={todo.isComplete} />
    </div>
  );
}
