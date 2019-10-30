import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import ToDoRepository from "./ToDoRepository";
import ToDoEntity from "./ToDoEntity";

@Service()
export default class ToDoService {
  constructor(@InjectRepository() private todoRepository: ToDoRepository) {}

  async getAllToDos() {
    const todos = await this.todoRepository.find();
    return todos;
  }

  async create(todo: ToDoEntity) {
    try {
      const createdTodo = await this.todoRepository.save(todo);
      return createdTodo;
    } catch (error) {
      console.log(error);
    }
  }
}
