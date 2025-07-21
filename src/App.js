import logo from './logo.svg';
import './App.css';
import React from 'react'
import './style.css'

function App() {
  return (
    <>
      <h2>DeveloperThai.com</h2>
      <div className='title'>React & React Native</div>
    </>
  )
  const divStyle={
    color:'red',
    backgroundColor:'powderblue',
    fontSize:'larger',
    padding:'3px',
  }
  return<div style={divStyle}>Hello React</div>
}

export default App;
