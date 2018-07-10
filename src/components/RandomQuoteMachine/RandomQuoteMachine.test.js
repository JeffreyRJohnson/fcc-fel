import RandomQuoteMachine from "./RandomQuoteMachine";

import * as Enzyme from "enzyme";
import * as EnzymeAdapter from "enzyme-adapter-react-16";
import * as React from "react";

import { shallow, ShallowWrapper } from "enzyme";

// Enzyme.configure({ adapter: new EnzymeAdapter() });

it("renders without crashing", () => {
  shallow(<RandomQuoteMachine />);
});

/*
// it("renders correctly without crashing", () => {});

// it("renders a quote on load", () => {});

// it("renders a newQuote button", () => {});

// it("renders a tweetQuote button", () => {});

// it("can tweet a quote starts at 0", () => {});

// it("can get a new quote", () => {});
*/
