import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
        <Route exact path="/">
          <p><Link to="/new">Add an Author</Link></p>
          <p>We have quotes by:</p>
          <Main />
        </Route>
        <Route path="/new">
          <New />
        </Route>
        <Route path="/edit/:id">
          <Update />
        </Route>
    </BrowserRouter>
  );
}
    
export default App;

