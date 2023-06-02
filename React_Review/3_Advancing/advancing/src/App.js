import './App.css';
//Components
import Images from './components/Images';
import Hook from './components/Hook';
import RenderList from './components/RenderList';
import ConditionalRender from './components/ConditionalRender';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
//Hooks
import {useState} from 'react';


function App() {
const [message, setMessage] = useState("");
const handleMessage = function(message) {
  setMessage(message)
}

  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <Images />
      <Hook />
      <RenderList />
      <ConditionalRender />
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
