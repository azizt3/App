import { useState } from 'react';
import './App.css';
import getComputerChoice from './common/rpslogic.js';

function Weapon(props) {
  return <button onClick={props.onClickFunction}> {props.weapon} </button>;
}

//Will display the game status (Not Started, In progress, Completed);
//Will display the round #; ok
//Will display who is winning; ok
//Will display the record (W-L-T); ok

function GameDisplay(props) {
  return (
    <div>
      <h2> Status: {props.status} </h2>
      <h2> Round: {props.round}</h2>
      <h2>Winner: {props.winStatus}</h2>
      <h2> My Record (W-L): {props.scoreBoard}</h2>
    </div>
  );
}

function App() {
  //OBJECTS

  const Status = ['Not Started', 'In Progress', 'Complete'];

  const winLoseColors = {
    winning: 'green',
    losing: 'red',
  };

  //FUNCTIONS

  const handleClick = (userChoice) => {

    setCounter(counter + 1);
    setComputerWeapon(() => getComputerChoice());

    if (gameStatus === 'Not Started') {
      setGameStatus('In Progress');
    }
  }

  function currentStatus() {
    if (counter === 0) {
      setGameStatus(Status[0]);
    }
    if (counter > 0) {
      setGameStatus(Status[1]);
    }
    return gameStatus;
  }

  function whosWinning() {
    return playerScore > computerScore
      ? 'You are currently winning!'
      : 'You are losing!';
  }

  //STATES
  const [counter, setCounter] = useState(1);
  const [computerWeapon, setComputerWeapon] = useState('');
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(1);
  const [gameStatus, setGameStatus] = useState('Not Started');
  const [currentWinner, setCurrentWinner] = useState('');

  return (
    <div>
      <h1>Begin 5 rounds!</h1>
      <h2>Computer chose: {computerWeapon}</h2>
      <Weapon onClickFunction={handleClick} weapon="Rock" />
      <Weapon onClickFunction={handleClick} weapon="Paper" />
      <Weapon onClickFunction={handleClick} weapon="Scissors" />

      <GameDisplay
        opponentWeapon={computerWeapon}
        status={gameStatus}
        round={counter}
        winStatus={whosWinning()}
        scoreBoard={playerScore + ' - ' + computerScore}
      />
    </div>
  );
}

export default App;
