import * as React from "react";
import "./../assets/scss/App.scss";
import RandomQuoteMachine from "./RandomQuoteMachine/RandomQuoteMachine";

// const reactLogo = require("./../assets/img/react_logo.svg");

// export interface IAppProps {}

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>Foo to the barz</p>

        <RandomQuoteMachine />
      </div>
    );
  }
}
