import { useState } from 'react'
import './App.css'

function Weapon(props){
  return(
    <button> {props.weapon} </button>
  )
}

function App() {
	return (
    
    <div>
      <h1>Begin 5 rounds!</h1>
      <Weapon weapon ='Rock'/>
      <Weapon weapon ='Paper'/>
      <Weapon weapon ='Scissors'/>
    </div>
  );
}


export default App
