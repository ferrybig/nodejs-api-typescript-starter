import ToDoService from "../ToDoService";

const todoService = new ToDoService();

describe("To do service", () => {
  test("should return a collection", () => {
    expect(todoService.getAllToDos()).toEqual([
      {
        name: "Item One"
      },
      {
        name: "Item Two"
      },
      {
        name: "Item Three"
      }
    ]);
  });
});
