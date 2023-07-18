import './App.css'

//2 - Reusing Components
import { Outlet } from 'react-router-dom';

//4 - Browsing between links
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
