import './App.css';
/*Components*/
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <MyForm user={{name: "Arthur Guilherme", email: "ArthurGuilherme2013@gmail.com"}}/>
    </div>
  );
}

export default App;
