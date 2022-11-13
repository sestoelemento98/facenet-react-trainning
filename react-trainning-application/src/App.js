import './App.css';

import Button from './components/Button';
import React from 'react';

function App() {
  const myStyle = {
    'color': 'green'
  }
  
  return (
    <div>
        <Button buttonColor={myStyle} buttonText="This text is prop from parent" onClick={handleClick}></Button>
    </div>
  );
}

const handleClick = () => {
  alert('Nguyen Thanh Ha')
}
export default App;
