import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Jeff', age: 21},
      { name: 'Jasmine', age: 21},
      { name: 'Kyla', age: 21},
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 21},
        { name: 'Jazzmine', age: 21},
        { name: 'Angelique', age: 21},
      ] 
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jeff', age: 21},
        { name: event.target.value, age: 21},
        { name: 'Kyla', age: 21},
      ] 
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Jeff Zeejay!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jeffy')} 
          changed={this.nameChangedHandler} >I am awesome!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
