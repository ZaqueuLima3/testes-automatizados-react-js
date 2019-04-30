import React from "react";
import { mount } from "enzyme";

import App from "./App";

it("should render hello world", () => {
  const wrapper = mount(<App />);

  expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true);
});
