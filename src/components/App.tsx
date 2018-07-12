import * as React from "react";
import "./../assets/scss/App.scss";
import Congrats from "./Jotto/Congrats";
import GuessedWords from "./Jotto/GuessedWords";
// import RandomQuoteMachine from "./RandomQuoteMachine/RandomQuoteMachine";

// const reactLogo = require("./../assets/img/react_logo.svg");

// export interface IAppProps {}

export default class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Jotto</h1>
        {/* <RandomQuoteMachine /> */}
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}
