import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TodoItemListRelationFilter } from "../todoItem/TodoItemListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  todoItems?: TodoItemListRelationFilter;
  keycloakId?: StringNullableFilter;
};
