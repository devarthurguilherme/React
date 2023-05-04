import './App.css';
//Images
import Img_2 from './assets/img_2.jpg';
//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Children from './components/Children';
//State
import {useState} from 'react';
function App() {
  const [name] = useState("Guilherme");
  const cars = [
    {id: 1, brand:"Ford", km: 231000, newCar: false, color: "pale green"},
    {id: 12, brand:"Ford", km: 1000, newCar: false, color: "pale blue"},
    {id: 114, brand:"Chevrolet", km: 0, newCar: true, color: "gray"},
    {id: 177, brand:"volkswagem", km: 120, newCar: false, color: "red"}
  ];

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
        {/*Arrays of Objects with Loop Map*/}
        {cars.map((car) => (
          <CarDetails 
            brand={car.brand}
            km={car.km}
            newCar={car.newCar}
            color={car.color}
          />
        ))}
        {/*Fragments*/}
        <Fragments propFragmentsTest={"testing prop fragment"}/>
        {/*Prop Children*/}
        <Children myValue="Testing Prop Value">
          <p>This is the Children Prop Children!</p>
        </Children>
        <Children myValue2="Testing Prop Value2">
          <p>This is my 2º test!</p>
        </Children>
      </div>
    </div>
  );
}

export default App;
