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
}

function App() {

  const[counter, setCounter] = useState(0);
  const roundCounter = () => setCounter(counter + 1 );

	return (
    
    <div>
      <h1>Begin 5 rounds!</h1>
      <Weapon onClickFunction = {roundCounter} weapon ='Rock'/>
      <Weapon onClickFunction = {roundCounter} weapon ='Paper'/>
      <Weapon onClickFunction = {roundCounter} weapon ='Scissors'/>
      <GameStatus message = {counter}/>
      <h2> Scoreboard: </h2>
  
    </div>
  );
}


export default App
