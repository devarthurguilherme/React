import React from 'react'
import { useParams, useNavigate } from "react-router-dom";


const ContactDetails = () => {
  const { id } = useParams();
  //6 Redirect
  const navigate = useNavigate()
  const handleContact = () => {
    console.log("Use Navigate")
    return navigate("/");
  }
  return (
    <div>
      <h1>Contact Details: {id}</h1>
      <button onClick={handleContact}>Send Message</button>
      
    </div>
  )
}

export default ContactDetails