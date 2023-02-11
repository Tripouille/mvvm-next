"use client";

import useTodoListViewModel from "@/view-model/useTodoListViewModel";
import TodoListView from "@/view/todo/TodoListView";

export default function TodoList() {
  const { todos } = useTodoListViewModel();

  return <TodoListView todos={todos} />;
}
