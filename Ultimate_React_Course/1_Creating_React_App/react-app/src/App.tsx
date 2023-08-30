import Message from './Message';

import { useState } from "react";

function App () {
  //const [firstName, setFirstName] = useState('');
  //const [lastName, setLastName] = useState('');
  //const [person, setPerson] = useState({
    //firstName: '',
    //lastName: '',
  //})

  const [drink, setDrink] = useState({
    title: "American",
    price: 5
  })

  const handleClick = () => {
    console.log("handleClick here!");
    
    setDrink({...drink, price: 6});
  }
  return (
    <div>
      <p>
        {drink.title} {drink.price}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;