import React from 'react'
import {Link } from 'react-router-dom';
const Test = () => {
  return (
    <ul className="App-header flex bg-red-400">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
  )
}

export default Test