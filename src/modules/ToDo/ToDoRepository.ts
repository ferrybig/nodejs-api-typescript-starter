import { EntityRepository, Repository } from "typeorm";
import ToDoEntity from "./ToDoEntity";

import { Service } from "typedi";

@Service()
@EntityRepository(ToDoEntity)
export default class ToDoRepository extends Repository<ToDoEntity> {}
