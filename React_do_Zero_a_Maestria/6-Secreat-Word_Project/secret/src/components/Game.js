import './Game.css';

const Game = ({verifyLetter}) => {
  return (
    <div>
        <h2>Game here</h2>
        <button onClick={verifyLetter}>End Game</button>
    </div>
  )
}

export default Game