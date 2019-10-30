import { Body, Get, HttpCode, JsonController, Post } from "routing-controllers";
import CreateToDoModel from "./models/CreateToDoModel";
import ToDoEntity from "./ToDoEntity";
import ToDoService from "./ToDoService";

@JsonController("/todos")
export default class ToDoController {
  constructor(private todoService: ToDoService) {}

  @Get()
  public async getAll() {
    const data = await this.todoService.getAllToDos();
    return data;
  }

  @HttpCode(201)
  @Post()
  public async post(@Body() todo: CreateToDoModel) {
    const entity: ToDoEntity = { id: 0, name: todo.name };

    const createdTodo = await this.todoService.create(entity);
    return createdTodo;
  }
}
