import { InputJsonValue } from "../../types";
import { TodoItemUpdateManyWithoutUsersInput } from "./TodoItemUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  todoItems?: TodoItemUpdateManyWithoutUsersInput;
  keycloakId?: string | null;
};
