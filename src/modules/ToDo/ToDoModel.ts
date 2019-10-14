import { IsInt, Length, Min } from "class-validator";

export default class ToDoModel {
  @Length(10, 20)
  id: number;

  @IsInt()
  @Min(1)
  name: string;
}
