import React from 'react'
import { useState} from 'react';

const ConditionalRender = () => {
    const [x] = useState(false);

  return (
    <div>
        <h2>Conditional Render</h2>
        <h3>Must I show it off?</h3>
        {x && <p>If x is true, so I print here!</p>}
        {!x && <p>Now x is false, so I print here!</p>}
    </div>
  )
}

export default ConditionalRender