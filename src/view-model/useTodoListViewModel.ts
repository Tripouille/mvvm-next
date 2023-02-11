import { Todo } from "@/model/todo";
import { APITodoRepository, TodoRepository } from "@/model/todo/repository";
import getAllTodos from "@/model/todo/usecase/getAllTodos";
import { useEffect, useState } from "react";

export default function useTodoListViewModel(
  todoRepository: TodoRepository = new APITodoRepository()
) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos(todoRepository).then(setTodos);
  }, [todoRepository]);

  return {
    todos,
  };
}
