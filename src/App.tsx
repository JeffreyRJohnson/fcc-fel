import * as React from "react";
// import ClickCounter from "./components/ClickCounter/ClickCounter";
// import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine";
import Congrats from "./components/Jotto/Congrats";
import GuessedWords from "./components/Jotto/GuessedWords";
import "./scss/App.scss";

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
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
