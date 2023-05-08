import './App.css';
//Components
import MyComponents from "./components/MyComponent"

function App() {
  return (
    <div className="App">
      {/*Global CSS*/}
      <h1>CSS in React</h1>
      {/*Component CSS*/}
      <MyComponents />
      <p>This paragraph is of the APP.JS</p>
      {/*Inline CSS*/}
      <p style={{color: "pink", backgroundColor: "black", padding: "2.5rem"}}>This element was stylized by inline mode</p>
    </div>
  );
}

export default App;
