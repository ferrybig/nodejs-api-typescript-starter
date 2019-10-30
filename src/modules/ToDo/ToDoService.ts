import signale from "signale";
import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import ToDoEntity from "./ToDoEntity";
import ToDoRepository from "./ToDoRepository";

@Service()
export default class ToDoService {
  constructor(@InjectRepository() private todoRepository: ToDoRepository) {}

  public async getAllToDos() {
    const todos = await this.todoRepository.find();
    return todos;
  }

  public async create(todo: ToDoEntity) {
    try {
      const createdTodo = await this.todoRepository.save(todo);
      return createdTodo;
    } catch (error) {
      signale.error(error);
    }
  }
}
