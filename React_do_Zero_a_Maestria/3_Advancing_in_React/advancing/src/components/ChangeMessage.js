import React from 'react'

const ChangeMessage = ({handleMessage}) => {
    const messages = ["Hello", "Hi", "Hey"];
  return (
    <div>
        <h2>State lift - Change Message</h2>
        <button onClick={() => handleMessage(messages[0])}>Hello</button>
        <button onClick={() => handleMessage(messages[1])}>Hi</button>
        <button onClick={() => handleMessage(messages[2])}>Hey</button>
    </div>
  )
}

export default ChangeMessage