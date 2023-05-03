import React from 'react'
import { useState} from 'react';

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Arthur");

    const changeName = () => {
      console.log("Change Name here!")
      if(name === "Arthur") {
        setName("Guilherme")
      } else {
        setName("Arthur");
      }
    }

  return (
    <div>
        <h2>Conditional Render</h2>
        <h3>Must I show it off?</h3>
        {x && <p>If x is true, so I print here!</p>}
        {!x && <p>Now x is false, so I print here!</p>}
        <h3>Ternary If</h3>
        {name === "Guilherme" ? (
          <div>
            <h4>Name is Arthur</h4>
            <p>Hello Arthur, how are you doing?</p>
          </div>
        ) : (
          <div>
            <h4>Name is not Arthur</h4>
            <p>Hello, who are you?</p>
          </div>
        )}
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default ConditionalRender