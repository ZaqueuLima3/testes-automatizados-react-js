import React from "react";
import { mount } from "enzyme";

import TodoList from "../../components/TodoList";

it("should be render the list and button", () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find("ul").exists()).toBe(true);
  expect(wrapper.find("input[name='todo']").exists()).toBe(true);
  expect(wrapper.find("button").exists()).toBe(true);
});

it("should be able to add new todo", () => {
  const wrapper = mount(<TodoList />);

  wrapper.find("input[name='todo']").simulate("change", {
    target: { value: "Novo todo" }
  });

  wrapper.find("button").simulate("click");

  expect(wrapper.find("ul").contains(<li>Novo todo</li>)).toBe(true);
});

it("should add new todo to local storage", () => {
  const setItemMock = jest.fn();

  global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
  global.localStorage.__proto__.setItem = setItemMock;

  const wrapper = mount(<TodoList />);

  wrapper.setState({ newTodo: "Novo todo" });
  wrapper.instance().handleAddTodo();

  expect(setItemMock).toHaveBeenLastCalledWith(
    "todos",
    JSON.stringify(["Novo todo"])
  );
});

it("should load todos in componentDidMount", () => {
  const getItemMock = jest.fn().mockReturnValue(JSON.stringify(["Fazer café"]));

  global.localStorage.__proto__.getItem = getItemMock;

  const wrapper = mount(<TodoList />);

  expect(wrapper.state("todos")).toEqual(["Fazer café"]);
});
