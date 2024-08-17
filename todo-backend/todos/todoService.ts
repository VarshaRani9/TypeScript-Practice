import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class todoService {
  public get(id: string): Todo {
    return {
      id,
      title: "mocked todo",
      description: "mocked todo description",
      done: false
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    return {
      id: "1", 
      title: "mocked todo",
      description: "mocked todo description",
      done: false
    };
  }
}