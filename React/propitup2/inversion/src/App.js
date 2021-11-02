import React from 'react';
import './App.css';
import WhatWhat from './components/whatwhat';

var zeBestArr = [
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith", "age":88, "hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore", "age":50, "hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith", "age":62, "hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {zeBestArr.map(props=> {
          return <WhatWhat firstName={props.firstName} lastName={props.lastName} age={props.age} hairColor={props.hairColor} />
        })}
        
      </header>
    </div>
  );
}

export default App;
