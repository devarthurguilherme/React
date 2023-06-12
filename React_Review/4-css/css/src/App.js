import './App.css';
/*Components*/
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
/* CSS Inline Dinamic and State Lift*/
function App() {
  return (
    <div className="App">
      <h1>H1 APP CSS</h1>
      <FirstComponent />
      <MyComponent />
    </div>
  );
}


export default App;