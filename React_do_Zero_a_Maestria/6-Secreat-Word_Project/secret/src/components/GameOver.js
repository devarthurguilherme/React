import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>End Game</h1>
      <h2>Your pontuation was: <span>{score}</span></h2> 
      <button onClick={retry}>Retry</button>       
    </div>
  )
}

export default GameOver