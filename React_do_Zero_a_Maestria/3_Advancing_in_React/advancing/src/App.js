import './App.css';
//Images
import Img_2 from './assets/img_2.jpg';
//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <div>
        <h2>Importing Images</h2>
        <img src="/img_1.jpg" alt="ps4WithControl" />
        {/*Img in Assets*/}
        <div>
          <img src={Img_2} alt="joysticks"/>
        </div>
        <ManageData />
        <ListRender />
      </div>
    </div>
  );
}

export default App;
