import { InputJsonValue } from "../../types";
import { TodoItemCreateNestedManyWithoutUsersInput } from "./TodoItemCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  todoItems?: TodoItemCreateNestedManyWithoutUsersInput;
  keycloakId?: string | null;
};
