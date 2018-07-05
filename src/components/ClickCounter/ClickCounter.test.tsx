import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import ClickCounter from "./ClickCounter";

it("renders correctly without crashing", () => {
  const wrapper = shallow(<ClickCounter />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {});

it("renders counter display", () => {});

it("renders correctly without crashing", () => {});

it("counter starts at 0", () => {});

it("clicking button starts at 0", () => {});

it("clicking button increments counter display", () => {});
