import { Todo } from ".";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;
}

export class InMemoryTodoRepository implements TodoRepository {
  todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }
}

export interface TodoAPIEntity {
  id: string;
  title: string;
  complete: boolean;
}

export class APITodoRepository implements TodoRepository {
  async getTodos(): Promise<Todo[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: TodoAPIEntity[] = await response.json();

    return todos.map(({ id, title, complete }) => {
      return {
        id: id,
        title: title,
        isComplete: complete,
      };
    });
  }
}
