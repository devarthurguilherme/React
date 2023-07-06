import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <h1>Contact Page</h1>
      {/* 5 - Nested Routes*/}
      <p>
        <Link to="/contact/1">Contact 1</Link>
        <Link to="/contact/2">Contact 2</Link>
        <Link to="/contact/3">Contact 3</Link>
        <Link to="/contact/4">Contact 4</Link>
      </p>
    </div>
  )
}

export default Contact