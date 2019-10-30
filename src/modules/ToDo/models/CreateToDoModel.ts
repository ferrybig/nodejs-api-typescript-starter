import { Length } from "class-validator";

export default class CreateToDoModel {
  @Length(10, 50)
  name: string;
}