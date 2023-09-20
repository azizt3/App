import { useState } from 'react';
import './App.css';

function Weapon(props) {
  return <button onClick={props.onClickFunction}> {props.weapon} </button>;
}

//Will display the game status (Not Started, In progress, Completed);
//Will display the round #; ok
//Will display who is winning; ok
//Will display the record (W-L-T); ok

function GameStatus(props) {
  return (
    <div >
      <h2> Status: {props.status} </h2>
      <h2> Round: {props.round}</h2>
      <h2 >Winner: {props.winStatus}</h2>
      <h2> My Record (W-L): {props.scoreBoard}</h2>
    </div>
  );
}

/*function ScoreBoard() {
  return <h2>0 - 0</h2>;
} 
*/

function App() {
  //OBJECTS

  const Status = ['Not Started', 'In Progress', 'Complete'];

  const winLoseColors = {
    winning: 'green',
    losing: 'red',
  };


  //FUNCTIONS

  function currentStatus() {
    if (counter === 0) {
      setGameStatus(Status[0]);
    } if (counter > 0)
    {
      setGameStatus(Status[1]);
    }
    return gameStatus
  };

  function whosWinning() {
    return playerScore > computerScore
      ? 'You are currently winning!'
      : 'You are losing!';
  }



  //STATES
  const [counter, setCounter] = useState(0);
  const [computerWeapon, setComputerWeapon] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(1);
  const [gameStatus, setGameStatus] = useState('Not Started');
  const [currentWinner, setCurrentWinner] = useState('');

  const roundCounter = () => setCounter(counter + 1);

  return (
    <div>
      <h1>Begin 5 rounds!</h1>
      <Weapon onClickFunction={roundCounter} weapon="Rock" />
      <Weapon onClickFunction={roundCounter} weapon="Paper" />
      <Weapon onClickFunction={roundCounter} weapon="Scissors" />
      
      <GameStatus
        status={gameStatus}
        round={counter}
        winStatus={whosWinning()}
        scoreBoard={playerScore + ' - ' + computerScore}
      />
    </div>
  );
}

export default App;
