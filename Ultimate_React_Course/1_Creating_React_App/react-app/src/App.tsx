import { useState } from "react";
import produce from 'immer';

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ExpandableText from './components/ExpandableText';
import TestPropsHere from './components/TestPropsHere';
import Form from "./components/Form";


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

  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick2 = () => {
    //Add
    setTags([ ...tags, "exciting"]);

    //Remove
    setTags(tags.filter(tag => tag !== "happy"));

    //Update
    setTags(tags.map(tag => tag === "happy" ? "hapiness" : tag));
  };

  const [bugs, setBugs] = useState([
    {id: 1, title: "Bug 1", fixed: false},
    {id: 2, title: "Bug 2", fixed: false}
  ]);

  const handleClick3 = () => {
    //setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1);
      if (bug) bug.fixed = true;
    }));
    
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClickGame = () => {
    setGame({ ...game, player: {name: "Arthur"} })
  }

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"]
  });

  const handleClickPizza = () => {
    setPizza({
      ...pizza, toppings: [...pizza.toppings, "Cheese"]
    })
  };

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 }
    ]
  });

  const handleClickCart = () => {
    setCart({
      ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1} : item),
    })
  }

  const [arthur, setArthur] = useState("arthur")
  const handleSetArthur = () => {
    setArthur("Guilherme");
  }

  return (
    <div>
      <p>
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      </p>
      <button onClick={handleClick3}>Click me</button>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quaerat suscipit sapiente veniam quo, recusandae quos ullam quas ut perferendis, porro officiis, deserunt dicta expedita! Accusamus architecto eum itaque similique provident, mollitia veritatis molestias eius asperiores. Esse suscipit quis aliquam magni, porro ad soluta, earum officiis et maiores, perspiciatis doloremque eveniet. Nobis repellendus culpa esse voluptatum enim doloremque veritatis recusandae deleniti sapiente consequuntur numquam quasi animi accusantium corporis, eum quas ab aperiam inventore nostrum iure laboriosam quia possimus. Magni, iusto sunt iste minima ipsa ipsam! Odit fuga numquam sapiente quaerat et minus assumenda qui, maiores mollitia vero harum! Eum, commodi!
      </ExpandableText>
      <TestPropsHere arthur={arthur}/>
      <Form />
    </div>
  );
};

export default App;