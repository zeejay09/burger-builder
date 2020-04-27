import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Jeff', age: 21},
      { name: 'Jasmine', age: 21},
      { name: 'Kyla', age: 21},
    ],
    showPersons: false,
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })};
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
