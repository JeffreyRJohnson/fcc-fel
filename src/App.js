import * as React from "react";
// import ClickCounter from "./components/ClickCounter/ClickCounter";
// import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine";

import { connect } from "react-redux";

import Congrats from "./components/Jotto/Congrats";
import GuessedWords from "./components/Jotto/GuessedWords";
import Input from "./components/Jotto/Input";
import "./scss/App.scss";
// import { runInThisContext } from "vm";
import { getSecretWord } from "./components/Jotto/actions";

// interface IState {
//   changeValues: object;
// }

export class UnconnectedApp extends React.Component {
  // public state: IState = {
  //   changeValues: {}
  // };

  // constructor(props) {
  //   super(props);
  // }

  /**
   * @method componentDidMount
   * @returns {undefined}
   */

  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        {/* <RandomQuoteMachine /> */}
        {/* <ClickCounter /> */}
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp);
