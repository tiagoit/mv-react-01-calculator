import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';

function App() {
  return (
    <div className="App">
      <Display value="0" />
      <ButtonPannel />
    </div>
  );
}

export default App;
