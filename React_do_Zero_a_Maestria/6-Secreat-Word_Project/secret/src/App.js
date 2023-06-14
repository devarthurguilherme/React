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

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWorld] = useState(""); 
  const [pickedCategory, setPickedCategory] = useState(""); 
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() => {
    //Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
  
    console.log(category);

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return { word, category };

  }, [words]);

  //Starts the Secret Word Game
  const startGame = useCallback(() => {
   //Clear all letters
   clearLetterStates();


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
  }, [pickedWordAndCategory]);

  //Verify the Letter Input
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase();

    //Check iif letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // push guessed letter or remove a guess
    if(letters.includes(normalizedLetter)) {
      setGuessedLetters(actualGuessedLetters => [
        ...actualGuessedLetters, 
        normalizedLetter
      ])
    } else {
      setWrongLetters(actualWrongLetters => [
        ...actualWrongLetters, 
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
      
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

// Check if guesses ended


  useEffect(() => {
    //reset all states

    if(guesses <= 0) {
      clearLetterStates()
      setGameStage(stages[2].name);
    }

  },[guesses]);

  // Check win conditional
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)];
 
    //win condition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore += 100);

      // restart game with new word
      startGame();

    }
    console.log(uniqueLetters);

  }, [guessedLetters, letters, startGame]);

  //Retry the Game
  const retry = () => {
    setGameStage(stages[0].name);
    setGuesses(guessesQty);
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
     {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
