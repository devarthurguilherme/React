import React from 'react'

const Child = ({handleFunctionText}) => {
  return (
    <button onClick={handleFunctionText}>Function Like Props</button>
  )
}

export default Child