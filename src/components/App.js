import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="app">
      <Display value="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
