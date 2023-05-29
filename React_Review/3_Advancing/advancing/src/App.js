import './App.css';
//Components
import Images from './components/Images';
import Hook from './components/Hook';
import RenderList from './components/RenderList';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <Images />
      <Hook />
      <RenderList />
      <ConditionalRender />
    </div>
  );
}

export default App;
