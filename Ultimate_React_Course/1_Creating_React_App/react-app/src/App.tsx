import { useState } from "react";

function App () {
  const [isVisible, setVisible] = useState(false);
  const [initial, setInitial] = useState(0);

  const handleVisibility = () => {
    setVisible(true);
    console.log(isVisible);
    setInitial((initial) + 1);
  };

  const handleReset = () => {
    setInitial(0);
  }

  return (
    <div>
      <button onClick={handleVisibility}>Button</button>
      <button  onClick={handleReset}>reset paragraph</button>
      <p>{initial}</p>
    </div>
  )
};

export default App;