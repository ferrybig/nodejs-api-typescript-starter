// import BaseEntity from "common/BaseEntity";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("todo")
export default class ToDoEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
}
