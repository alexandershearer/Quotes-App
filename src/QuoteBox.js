import React, { Component } from 'react';
import App from './App';
import './App.css';

class QuoteBox extends Component {
    render() {
        return (
            <div>
                <h1 className="quoteText">{this.props.quote}</h1>
                <h3 className="quoteText">-{this.props.author !== '' ? this.props.author : 'Unknow'}-
                </h3>
                <button onClick={this.props.handleClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;