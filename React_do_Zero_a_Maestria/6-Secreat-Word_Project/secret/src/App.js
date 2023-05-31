/*CSS*/
import './App.css';
/*Components*/
import StartScreen from './components/StartScreen'
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
  const [gameStage, setGameStage] = useState(stages[0].name)
//2:40

  return (
    <div className="App">
     <StartScreen />
    </div>
  );
}

export default App;
