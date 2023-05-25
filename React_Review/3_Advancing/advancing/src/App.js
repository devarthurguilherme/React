import './App.css';
//Components
import Images from './components/Images';
import Hook from './components/Hook';
import RenderList from './components/RenderList';
import ConditionalRender from './components/ConditionalRender';
import ShowUsername from './components/ShowUsername';
import DestructuringProps from './components/DestructuringProps';
import Fragment from './components/Fragment';
import Container from './components/Container';
import Function from './components/FunctionLikeProp'
//Hooks
import {useState} from 'react';

function App() {

  const name = "Arthur Guilherme de Souza Silva";
  const [userName] = useState("UserName State Here");

  const cars = [
    {id: 1, brand:"Chevrolet", km: 123478, color:"Blue", newCar:false},
    {id: 2, brand:"Gol", km: 0, color:"Black", newCar:true},
    {id: 3, brand:"Ford", km: 0, color:"Red", newCar:true},
    {id: 4, brand:"Chevrolet", km: 323478, color:"Pink", newCar:false}
  ]

  const Print = () => {
    console.log("Hello Mane!")
  }
  return (
    <div className="App">
      <h1>Advancing in React</h1>
      <Images />
      <Hook />
      <RenderList />
      <ConditionalRender />
      <ShowUsername name={name} name2={userName}/>
      <DestructuringProps brand="Fiat" km={280000} color="Gray" newCar={false}/>
      <DestructuringProps brand="Fiat" km={0} color="Red" newCar={true}/>
      <DestructuringProps brand="Ford" km={230000} color="Brown" newCar={false}/>
      {cars.map((car) => (
        <DestructuringProps 
          brand={car.brand} 
          km={car.km} 
          color={car.color}
          newCar={car.newCar}
          />
      ))}
      <Fragment helo="Hello"/>
      <Container myValue="123">
        <p>This is a Children!</p>
      </Container>
      <Function handlePrint = {Print}/>
      {/* State Lift*/}
      
    </div>
  );
}

export default App;
