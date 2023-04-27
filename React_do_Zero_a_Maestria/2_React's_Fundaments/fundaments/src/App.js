//styles / CSS
import './App.css';

//components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundaments</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
    </div>
  );
}

export default App;
