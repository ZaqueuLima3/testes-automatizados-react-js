import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todo", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("Novo todo"));

    expect(state.data[0]).toBe("Novo todo");
  });

  it("should be able to complete todo", () => {
    const todos = ["Fazer café"];

    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Fazer café")
    );

    expect(state.data.length).toBe(0);
  });
});
