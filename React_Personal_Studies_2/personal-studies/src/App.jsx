//Hooks
import { useRef, useState } from "react";
//Components
import Car from "./components/Car";
import Child from "./components/Child";

function App() {
  const brand = "Fiat";

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
    console.log("Input Focus Here!")
  };

  const changeColorParagraph = useRef();
  const changeColor = () => {

    if (changeColorParagraph.current.style.color === "red") {
      changeColorParagraph.current.style.color  = "blue"
    } else {
      changeColorParagraph.current.style.color = "red";
    }
  };

  const clickCountReference  = useRef(0);
  const [count, setCount] = useState(0);

  const countClicks = () => {
    clickCountReference.current += 1 ;
    setCount(clickCountReference.current);
  };

  const [text, setText] = useState("...");
  const handleChangeText = () => {
    if (text === "...") {
      setText("Event");
    } else {
      setText("...")
    }
  }

  const [functionText, setFunctionText] = useState("no change");
  const handleFunctionText = () => {
    setFunctionText("it Changed now!");
  };

  const [myName, setMyName] = useState("Arthur");
  const [numberTest, setNumberTest] = useState(1);

  const changeNumber = () => {
    //Previous State
    setNumberTest((prevNumber) => prevNumber + 1);
    setNumberTest((prevNumber) => prevNumber + 1);
    
  };
  // 11 min
  return (
    <>
      <h2>Props</h2>
      <Car brand={brand}/>
      <h2>useRef</h2>
      <div>
        <input 
          ref={inputRef}
          type="text" 
        />
          <button onClick={focusInput}>InputFocus</button>

          <p ref={changeColorParagraph}>Hello! this paragraphy will change color when you click in this button!</p>
          <button onClick={changeColor}>Change Color</button>
      </div>
      <div>
        <p>Buttons Clicks {count}</p>
        <button onClick={countClicks}>Count</button>
      </div>
      <h2>Events</h2>
      <p>This text is used in {text}</p>
      <button onClick={handleChangeText}>Event</button>

      <h2>Events like Props</h2>
      <p> Here, the button inside Child has to change this next word: {functionText}</p>
      <Child handleFunctionText={handleFunctionText}/>
      <p>My name is: {myName}</p>
      <button onClick={() => {setMyName("Arthur Guilherme")}}>Full Name</button>
      <p>Number to test state hook here: {numberTest}</p>
      <button onClick={changeNumber}>Change Number</button>
      <h2>Inputs</h2>
      <h3>My name is: {myName}</h3>
      <input type="text" value={myName} onChange={e => setMyName(e.target.value)}/>
    </>
  )
}

export default App
