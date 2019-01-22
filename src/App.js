import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHello from './ex01/MyHello'
import NameTag from './ex01/NameTag'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <MyHello></MyHello>
            <NameTag name='Captain' age='80'></NameTag>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React First app
            </a>
          </header>
        </div>
    );
  }
}

export default App;
