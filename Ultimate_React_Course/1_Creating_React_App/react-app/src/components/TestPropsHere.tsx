import React from 'react'

interface Props {
  arthur: string,
  
}

const TestPropsHere = ({arthur} : Props) => {
  return (
    <div>{arthur}</div>
  )
}

export default TestPropsHere