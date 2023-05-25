import React from 'react'

const ShowUsername = (props) => {
  return (
    <div>
        <h2>ShowUserName here</h2>
        <h3>User Name is: {props.name}</h3>
        <h3>User Name State is: {props.name2}</h3>
    </div>
  )
}

export default ShowUsername