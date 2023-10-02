import { useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);

  //1 - The Basic Use
  useEffect(() => {
    console.log("Each Render, it will 'spin'")
  });

   //2 - Dependency Array
   useEffect(() => {
    console.log("Just Render when increments value")
  }, [count]);

  //7:00

  return (
    <>
      <h1>Cont: {count}</h1>
      <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Render</button>
      <h1>ContB: {countB}</h1>
      <button onClick={() => {setCountB(prevCount => prevCount + 1)}}>RenderB</button>
    </>
  )
}

export default App
