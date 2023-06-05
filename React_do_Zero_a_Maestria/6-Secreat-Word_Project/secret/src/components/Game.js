import './Game.css';

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
          <span>Pontuation: 000</span>
        </p>
        <h1>Think in the word</h1>
        <h3 className="tip">
          Tip about the word <span>Tip...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blankSquare"></span>
        </div>
        <div className="letterContainer">
          <p>Try to discover a letter of word:</p>
          <form action="">
            <input 
              type="text" 
              name="letter" 
              maxLength="1" 
              required 
            />
            <button>Play!</button>
          </form>
        </div>
        <div className="wrongLettersContainer">
          <p>Letters used: </p>
          <span>a, </span>
          <span>b, </span>
        </div>
    </div>
  )
}

export default Game