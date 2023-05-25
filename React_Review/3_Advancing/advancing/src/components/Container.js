import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h1>Prop Children here!</h1>
        {children}
        <p>My value is: {myValue}</p>
    </div>
  )
}

export default Container