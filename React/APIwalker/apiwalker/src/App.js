import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from './components/form'
import Planet from './components/Planet';
import People from './components/People';

function App() {
  return (
    <BrowserRouter>
      <h1>Luke APIwalker</h1>
      <Form />
      <Switch>
          <Route path='/people/:id'>
            <People />
          </Route>
          <Route path='/planets/:id'>
            <Planet />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
