import * as React from "react";
import ClickCounter from "./components/ClickCounter/ClickCounter";
// import RandomQuoteMachine from "./components/RandomQuoteMachine/RandomQuoteMachine";
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
        <ClickCounter />
      </div>
    );
  }
}

export default App;
