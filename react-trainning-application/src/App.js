import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Button from './components/Button';
import React from 'react';

function App() {
  const myStyle = {
    'color': 'green'
  }
  
  return (
    <div>
        <Button buttonColor={myStyle} buttonText="This text is prop from parent"></Button>
    </div>
  );
}

export default App;
