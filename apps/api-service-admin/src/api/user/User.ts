import { JsonValue } from "type-fest";
import { TodoItem } from "../todoItem/TodoItem";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  todoItems?: Array<TodoItem>;
  keycloakId: string | null;
};
