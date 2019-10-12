import { JsonController, Get } from "routing-controllers";

@JsonController()
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
