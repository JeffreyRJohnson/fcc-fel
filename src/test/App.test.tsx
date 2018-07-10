import { shallow } from "enzyme";
import * as React from "react";
import App from "../App";

describe("<App />", () => {
  describe("Render as expected", () => {
    it("renders without crashing", () => {
      shallow(<App />);
    });
  });

  describe("Props and State testing", () => {
    it("state and props are empty", () => {
      const wrapper = shallow(<App />);
      const initState = { changeValues: {} };

      expect(wrapper.state()).toMatchObject(initState);
      expect(wrapper.state("changeValues")).toMatchObject({});

      expect(wrapper.props()).toMatchObject({});
    });
  });
});
