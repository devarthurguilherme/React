import './GameOver.css';

const GameOver = ({retry}) => {
  return (
    <div>
      <h2>Game Over here</h2> 
      <button onClick={retry}>Retry</button>       
    </div>
  )
}

export default GameOver