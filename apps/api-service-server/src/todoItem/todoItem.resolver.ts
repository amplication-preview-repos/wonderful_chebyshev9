import * as graphql from "@nestjs/graphql";
import { TodoItemResolverBase } from "./base/todoItem.resolver.base";
import { TodoItem } from "./base/TodoItem";
import { TodoItemService } from "./todoItem.service";

@graphql.Resolver(() => TodoItem)
export class TodoItemResolver extends TodoItemResolverBase {
  constructor(protected readonly service: TodoItemService) {
    super(service);
  }
}
