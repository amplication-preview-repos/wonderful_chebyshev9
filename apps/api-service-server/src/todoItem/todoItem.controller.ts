import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TodoItemService } from "./todoItem.service";
import { TodoItemControllerBase } from "./base/todoItem.controller.base";

@swagger.ApiTags("todoItems")
@common.Controller("todoItems")
export class TodoItemController extends TodoItemControllerBase {
  constructor(protected readonly service: TodoItemService) {
    super(service);
  }
}
