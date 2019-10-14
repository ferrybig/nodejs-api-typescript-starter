import { JsonController, Get } from "routing-controllers";
import ToDoService from "./ToDoService";

@JsonController("/todos")
export default class ToDoController {
  constructor(private todoService: ToDoService) {}

  @Get()
  getAll() {
    return this.todoService.getAllToDos();
  }
}
