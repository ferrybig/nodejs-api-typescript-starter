import { JsonController, Get } from "routing-controllers";

@JsonController("/todos")
class ToDoController {
  @Get()
  getAll() {
    return [
      {
        name: "Item One"
      },
      {
        name: "Item Two"
      }
    ];
  }
}

export default ToDoController;
