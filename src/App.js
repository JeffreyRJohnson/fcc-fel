import * as React from "react";
// import ClickCounter from "./components/ClickCounter/ClickCounter";
// import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine";

import { connect } from "react-redux";

import Congrats from "./components/Jotto/Congrats";
import GuessedWords from "./components/Jotto/GuessedWords";
import Input from './components/Jotto/Input';
import "./scss/App.scss";
import { runInThisContext } from "vm";

interface IState {
  changeValues: object;
}

class App extends React.Component {
  public state: IState = {
    changeValues: {}
  };

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        {/* <RandomQuoteMachine /> */}
        {/* <ClickCounter /> */}
        <h1>Jotto</h1>
        <Congrats success={runInThisContext.props.success} />
        <Input/>
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return;
};

export default mapStateToProps(App);
