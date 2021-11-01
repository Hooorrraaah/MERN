import React from 'react';
import './App.css';

import Person from './components/Person';

function App() { 
  // const personCard = {
  //     firstName:"",
  //     lastName:"",
  //     age:"",
  //     hairColor:""
  //   }

  return (

    
  <div className="App">
      <Person personCard={"Austen","Jensen","29","Red"}></Person>

      <Person personCard={"Austen","Jensen","29","Red"}></Person>

      <Person personCard={"Austen","Jensen","29","Red"}></Person>
      
      <Person personCard={"Austen","Jensen","29","Red"}></Person>
    </div>
  );
}
export default App;

