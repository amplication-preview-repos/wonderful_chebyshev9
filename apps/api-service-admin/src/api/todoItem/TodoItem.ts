import { User } from "../user/User";

export type TodoItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  completed: boolean | null;
  dueDate: Date | null;
  title: string | null;
  user?: User | null;
};
