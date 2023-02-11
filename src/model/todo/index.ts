export type TodoID = string;

export interface Todo {
  id: TodoID;
  title: string;
  isComplete: boolean;
}
