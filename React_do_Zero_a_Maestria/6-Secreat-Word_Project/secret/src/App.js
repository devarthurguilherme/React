/*CSS*/
import './App.css';
/*Components*/
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
/*Hooks*/
import {useCallback, useState, useEffect} from 'react';
/*Data*/
import { wordsList } from './data/words';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWorld] = useState(""); 
  const [pickedCategory, setPickedCategory] = useState(""); 
  const [leters, setLetters] = useState("");

  //Starts the Secret Word Game
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  //Verify the Letter Input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  //Retry the Game
  const retry = () => {
    setGameStage(stages[0].name);
  }

  console.log(words)
  return (
    <div className="App">
     {gameStage === 'start' && <StartScreen startGame={startGame}/>}
     {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
     {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
