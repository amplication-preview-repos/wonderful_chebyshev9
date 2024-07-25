import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoItemCreateInput = {
  description?: string | null;
  completed?: boolean | null;
  dueDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
