import { useState, useEffect} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(10);
  const [user, setUser] = useState();

  //1 - The Basic Use
  useEffect(() => {
    console.log("1 - Each Render, it will 'spin'")
  });

   //2 - Dependency Array
   useEffect(() => {
    console.log("2 - Just Render when increments value")
  }, [count]);

    //3 - Empty Array
    useEffect(() => {
      console.log("3 - Just Execute once time!")
    }, []);

    //4 - Clean Up
    useEffect(() => {
      const timer = setTimeout(() => {
        console.log(`The incremeter was changed ${count} times!`)
      }, 2000);

      return () => {
        clearTimeout(timer)
      }

    }, [count])

    //5 - Fetch
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json)
    .then((json) => setUser(json));
    }, []);
  
  return (
    <>
      <h1>Cont: {count}</h1>
      <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Render</button>
      <h1>ContB: {countB}</h1>
      <button onClick={() => {setCountB(prevCount => prevCount + 1)}}>RenderB</button>

      <h1>User Data</h1>
      <p>{user[0]}</p>
    </>
  )
}

export default App
