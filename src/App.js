import React from 'react';
import './App.css';
//Import Components
import GamesMenu from './components/GamesMenu'
import Home from './components/Home'

function App() {
  
  return (
    <div className="App">
      <Home />
      <GamesMenu />
    </div>
  );
}

export default App;
