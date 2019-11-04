import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class App extends Component {

  constructor(props) {
    //Setting up the constructor function so we can set our default state
    super(props);
    this.state = {
      //Set the first quote and author as our default state
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }

  //Create a function called getRandomQuote that returns a random quote from the array of quotes. Hint: You'll need to generate a random number between 0 and 1 less than the length of the array
  getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
    //   const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    //   return quotes[randomQuoteIndex];
  }

  //Function that will be called when the ne quote button on the quotebox component is pressed
  handleClick = () => {
    //Generate a random quote
    const randomQuote = this.getRandomQuote();
    //Update our state with information from that random quote
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }

  render() {
    return (
      <div>
        <QuoteBox
          quote={this.state.quote}
          author={this.state.author}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
