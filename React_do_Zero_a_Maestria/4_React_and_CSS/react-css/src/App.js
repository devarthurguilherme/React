import './App.css';
//Components
import MyComponents from "./components/MyComponent";
import Title from "./components/Title";
//Hooks
import {useState} from "react";
function App() {
  const n = 12;
  const [name] = useState("Arthur");
  const redTitle = false;

  return (
    <div className="App">
      {/*Global CSS*/}
      <h1>CSS in React</h1>
      {/*Component CSS*/}
      <MyComponents />
      <p>This paragraph is of the APP.JS</p>
      {/*Inline CSS*/}
      <p style={{color: "pink", backgroundColor: "black", padding: "2.5rem"}}>This element was stylized by inline mode</p>
      {/*Dinamic Inline*/}
      <h2 style={ n > 10 ? ({color: "blue"}) : ({color: "red"})}>Dinamic CSS</h2>
      <h3 style={ name === "Arthur" ? ({backgroundColor: "black", color: "white"}) : ({backgroundColor: "red", color: "white"})}>Dinamic CSS with UseState</h3>
      {/*Dinamic Classes*/}
      <h3 className={redTitle ? "redTitle" : "title"}>Dinamic Classes</h3>
      {/*CSS Modules*/}
      <Title />
    </div>
  );
}

export default App;
