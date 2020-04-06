import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is really working!</p>
        <Person name="Jeff" age="21"/>
        <Person name="Jasmine" age="21"/>
        <Person name="Kyla" age="21"/>
      </div>
    );
  }
}

export default App;
