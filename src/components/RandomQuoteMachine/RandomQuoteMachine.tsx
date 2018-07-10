import * as React from "react";
import "./RandomQuoteMachine.css";

interface IRandomQuoteMachineState {
  author: string;
  [data: string]: any;
  quote: string;
}

class RandomQuoteMachine extends React.Component<{}, IRandomQuoteMachineState> {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      data: "",
      quote: ""
    };
  }

  public getQuote = event => {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  };

  public componentDidMount() {
    this.getQuote(this.state);
  }

  public tweetQuote = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${this.state.data.quote}  -${
        this.state.data.author
      }`
    );
  };

  public render() {
    const { data } = this.state;
    return (
      <div className="hero-image" data-test="component-app">
        <figure className="quoteContainer">
          <q data-test="quote-display" className="quoteText">
            {data.quote}
          </q>
          <figcaption className="quoteAuthor">-{data.author}</figcaption>
        </figure>
        <div className="button-container">
          <button data-test="newQuote-button" onClick={this.getQuote}>
            new Quote
          </button>
          <button data-test="tweetQuote-button" onClick={this.tweetQuote}>
            Tweet Quote
          </button>
        </div>
      </div>
    );
  }
}

export default RandomQuoteMachine;
