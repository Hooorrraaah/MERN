import React from 'react';
import './App.css';

import Person from './components/Person';

var arr = [
{"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
{"firstName":"John", "lastName":"Smith", "age":88, "hairColor":"Brown"},
{"firstName":"Millard", "lastName":"Fillmore", "age":50, "hairColor":"Brown"},
{"firstName":"Maria", "lastName":"Smith", "age":62, "hairColor":"Brown"}
]

function App() { 

  return (

    
  <div className="App">
      {/* <Person firstName={"Jane"} lastName ={"Doe"} age={45} hairColor={"Black"}></Person>
      <Person firstName={"Smith"} lastName ={"John"} age={88} hairColor={"Brown"}></Person>
      <Person firstName={"Millard"} lastName ={"Fillmore"} age={50} hairColor={"Brown"}></Person>
      <Person firstName={"Maria"} lastName ={"Smith"} age={62} hairColor={"Brown"}></Person> */}

    {arr.map(person => {
      return <Person firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      
    })}

  </div>
  );
}
export default App;

