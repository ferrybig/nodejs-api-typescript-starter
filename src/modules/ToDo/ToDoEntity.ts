// import BaseEntity from "common/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("todo")
export default class ToDoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
