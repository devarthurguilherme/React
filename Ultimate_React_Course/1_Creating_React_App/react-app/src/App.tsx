import Message from './Message';

import { useState } from "react";
import produce from 'immer';

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
  return (
    <div>
      <p>
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p>)}
      </p>
      <button onClick={handleClick3}>Click me</button>
    </div>
  );
};

export default App;