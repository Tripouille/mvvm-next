import { Todo } from "@/model/todo";
import TodoView from "./TodoView";

export interface TodoListViewProps {
  todos: Todo[];
}

export default function TodoListView({ todos }: TodoListViewProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoView todo={todo} />
        </li>
      ))}
    </ul>
  );
}
