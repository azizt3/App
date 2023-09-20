import { useState } from 'react'
import './App.css'
import './common/rpslogic.js'
import utils from './common/rpslogic.js'


function Weapon(props){
  return(
    <button onClick = {() => props.onClickFunction}> {props.weapon} </button>
  )
}

function GameStatus(props) {
  return(
    <h2> {props.message} </h2>
  )
}

function ScoreBoard(props){
  return(
    <h2>{props.display}</h2>
  )
}

function App() {

  const[counter, setCounter] = useState(0);
  const[computerWeapon, setComputerWeapon] = useState("");
  const roundCounter = () => setCounter(counter + 1 );
  const weaponSelector = () => setComputerWeapon(utils.computerChoice);

	return (
    
    <div>
      <h1>Begin 5 rounds!</h1>
      <Weapon onClickFunction = {roundCounter, weaponSelector} weapon ='Rock'/>
      <Weapon onClickFunction = {roundCounter, weaponSelector} weapon ='Paper'/>
      <Weapon onClickFunction = {roundCounter, weaponSelector} weapon ='Scissors'/>
      <GameStatus message = {counter}/>
      <ScoreBoard display = {computerWeapon}/>
  
    </div>
  );
}


export default App
