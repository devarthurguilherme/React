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
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLeters] = useState([]);
  const [wrongLetters, setWrongLeters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  
    console.log(category);

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };

  }

  //Starts the Secret Word Game
  const startGame = () => {

  const { word, category } = pickedWordAndCategory();
   
  //Creating Array of Letters
  let wordLetters = word.split("");
  wordLetters = wordLetters.map((l) => l.toLowerCase());

  console.log(wordLetters);
  console.log( word, category);

  // Fill States
  setPickedWorld(word);
  setPickedCategory(category);
  setLetters(wordLetters);

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
     {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord} 
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}
     {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
