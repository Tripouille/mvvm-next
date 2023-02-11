import { Todo } from "..";
import { APITodoRepository, TodoRepository } from "../repository";

export default async function getAllTodos(
  todoRepository: TodoRepository = new APITodoRepository()
): Promise<Todo[]> {
  return todoRepository.getTodos();
}
