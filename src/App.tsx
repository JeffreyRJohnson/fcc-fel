import * as React from 'react';
import './scss/App.scss';

interface IState {
  changeValues: object
}

class App extends React.Component {
  
  public state: IState = {
    changeValues: {}
  }

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default App;
