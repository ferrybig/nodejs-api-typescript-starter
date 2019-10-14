import { Service } from "typedi";

@Service()
export default class ToDoService {
  getAllToDos() {
    return [
      {
        name: "Item One"
      },
      {
        name: "Item Two"
      },
      {
        name: "Item Three"
      }
    ];
  }
}
