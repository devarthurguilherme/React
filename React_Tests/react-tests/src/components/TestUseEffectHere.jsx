import React from 'react';
import { useState, useEffect } from 'react';

const TestUseEffectHere = () => {
  const [count, setCount] = useState(0);

  const incrementingCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Component TestUseEffectHere rendered!");

    document.title = `Count: ${count}`;
  }, [count]);
  
  return (
    <div>
      <h2>TestUseEffectHere</h2>
      <p>Count: {count}</p>
      <button onClick={incrementingCount}>Increment Count</button>
    </div>
  )
}

export default TestUseEffectHere