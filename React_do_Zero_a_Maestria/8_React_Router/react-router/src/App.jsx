import './App.css'

//2 - Reusing of Structuring
import { Outlet } from "react-router-dom";

// 4 - Browsing between Pages
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
