import './App.css';
//Images
import Img_2 from './assets/img_2.jpg';
//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
//State
import {useState} from 'react';
function App() {
  const [name] = useState("Guilherme");

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
        <ConditionalRender />
        {/*Props*/}
        <ShowUserName name={name}/>
        {/*Destructuring*/}
        <CarDetails 
          brand={"Fiat"}
          km={280000}
          color={"gray"}
          newCar={false}
          />
        {/*Reusing of Components*/}
        <CarDetails 
          brand={"Pegeout"}
          km={40000}
          color={"blue"}
          newCar={false}
          />
        <CarDetails 
          brand={"Renault"}
          km={0}
          color={"black"}
          newCar={true}
          />
      </div>
    </div>
  );
}

export default App;
