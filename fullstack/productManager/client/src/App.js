import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Product Manager</h1>
        </header>
            <Main />
      </div>
  );
}

export default App;
