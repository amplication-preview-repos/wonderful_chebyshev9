import { Module } from "@nestjs/common";
import { TodoItemModuleBase } from "./base/todoItem.module.base";
import { TodoItemService } from "./todoItem.service";
import { TodoItemController } from "./todoItem.controller";
import { TodoItemResolver } from "./todoItem.resolver";

@Module({
  imports: [TodoItemModuleBase],
  controllers: [TodoItemController],
  providers: [TodoItemService, TodoItemResolver],
  exports: [TodoItemService],
})
export class TodoItemModule {}
