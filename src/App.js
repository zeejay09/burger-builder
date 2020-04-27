import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asasd', name: 'Jeff', age: 21},
      { id: '123a', name: 'Jasmine', age: 21},
      { id: 'asasd21d', name: 'Kyla', age: 21},
    ],
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person key={person.id} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
          })}
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
