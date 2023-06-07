import './Game.css';

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  return (
    <div className="game">
        <p className="points">
          <span>Pontuation: {score}</span>
        </p>
        <h1>Think in the word</h1>
        <h3 className="tip">
          Tip about the word: <span>{pickedCategory}</span>
        </h3>
        <p>You still have {guesses} guess(es)!</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
              guessedLetters.includes(letter) ? (
                <span key={i} className="bletter">
                  {letter}
                </span>
              ) : (
                <span key={i} className="blankSquare"></span>
              )
          ))}
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
         {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
         ))}
        </div>
    </div>
  )
}

export default Game