import { JsonController, Get, Post, Body, HttpCode } from "routing-controllers";
import ToDoService from "./ToDoService";
import CreateToDoModel from "./models/CreateToDoModel";
import ToDoEntity from "./ToDoEntity";

@JsonController("/todos")
export default class ToDoController {
  constructor(private todoService: ToDoService) {}

  @Get()
  async getAll() {
    const data = await this.todoService.getAllToDos();
    return data;
  }

  @HttpCode(201)
  @Post()
  async post(@Body() todo: CreateToDoModel) {
    const entity: ToDoEntity = { id: 0, name: todo.name };

    const createdTodo = await this.todoService.create(entity);
    return createdTodo;
  }
}
