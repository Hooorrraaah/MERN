import './App.css';
import React,{useState} from 'react';
import View from './components/View';
import NewItem from './components/New';

function App() {

const [currentItem, setCurrentItem] = useState([])

const passingInfo = (aNewItem) =>{
  setCurrentItem([...currentItem,aNewItem])
}

  return (
    <div className="App">
      <header className="App-header">
        <NewItem passItem={passingInfo} />
        <View items={currentItem}/>
      </header>
    </div>
  );
}

export default App;
