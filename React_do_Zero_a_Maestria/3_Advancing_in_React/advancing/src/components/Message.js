import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        <h2>State Lift Message Here</h2>
        <p>The message is: {message}</p>
    </div>
  )
}

export default Message