import React from 'react'
import { useParams } from "react-router-dom";


const ContactDetails = () => {
  const { id } = useParams();
  //20:00
  return (
    <div>
      <h1>Contact Details: {id}</h1>
      
    </div>
  )
}

export default ContactDetails