import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoItemUpdateInput = {
  description?: string | null;
  completed?: boolean | null;
  dueDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
