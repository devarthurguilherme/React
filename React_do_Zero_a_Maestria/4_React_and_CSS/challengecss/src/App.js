import './App.css';
//Components
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1, brand: "Fiat", km: 278000, color: "Gray", year: 1994},
    {id: 2, brand: "Hyundai", km: 170000, color: "Black", year: 2005},
    {id: 3, brand: "BMW", km: 108000, color: "Blue", year: 2017},
    {id: 4, brand: "Iveco", km: 178000, color: "Blue", year: 2018}
  ];

  return (
    <div className="App">
      <h1>Challenge CSS</h1>
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand}
          km={car.km}
          color={car.color}
          year={car.year}
        />
      ))}
    </div>
  );
}

export default App;
