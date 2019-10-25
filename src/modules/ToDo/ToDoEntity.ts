import BaseEntity from "common/BaseEntity";
import { Entity } from "typeorm";

@Entity()
export default class ToDoEntity extends BaseEntity {
  name: string;
}
