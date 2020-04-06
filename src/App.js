import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {

  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Jeff', age: 21},
        { name: 'Jasmine', age: 21},
        { name: 'Kyla', age: 21},
      ]
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState({
      persons: [
        { name: 'Zeejay', age: 21},
        { name: 'Jazzmine', age: 21},
        { name: 'Angelique', age: 21},
      ] 
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am a React App!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am awesome!</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
