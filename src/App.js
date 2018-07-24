import React from "react";
import { connect } from "react-redux";
import "./scss/App.scss";

import GuessedWords from "./components/Jotto/GuessedWords";
import Congrats from "./components/Jotto/Congrats";
import Input from "./components/Jotto/Input";
import { getSecretWord } from "./components/Jotto/actions";

export class UnconnectedApp extends React.Component {
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
