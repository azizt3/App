import { useState } from 'react'
import './App.css'


function Weapon(props){
  return(
    <button onClick = {props.onClickFunction}> {props.weapon} </button>
  )
}

function GameStatus(props) {
  return(
    <h2> {props.message} </h2>
  )
}

function ScoreBoard(){
  return(
    <h2>0 - 0</h2>
  )
}

function App() {

  const[counter, setCounter] = useState(0);
  const[computerWeapon, setComputerWeapon] = useState(0);
  const roundCounter = () => setCounter(counter + 1 );

	return (
  
    <div>
      <h1>Begin 5 rounds!</h1>
      <Weapon onClickFunction = {roundCounter} weapon ='Rock'/>
      <Weapon onClickFunction = {roundCounter} weapon ='Paper'/>
      <Weapon onClickFunction = {roundCounter} weapon ='Scissors'/>
      <GameStatus message = {counter}/>
      <ScoreBoard/>
  
    </div>
  );
}


export default App
