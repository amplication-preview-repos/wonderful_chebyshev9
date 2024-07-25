import { SortOrder } from "../../util/SortOrder";

export type TodoItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  completed?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  userId?: SortOrder;
};
