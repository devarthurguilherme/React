import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Test from './components/Test';
import './styles/global.css';
  
class App extends Component {
render() {
    return (
    <Router>
      <div className="App">
        <Test/>
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
        </div>
    </Router>
);
}
}
  
export default App;