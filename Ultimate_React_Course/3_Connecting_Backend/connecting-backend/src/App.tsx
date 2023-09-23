import axios, {AxiosError} from 'axios';

//Hooks
import { useEffect, useRef, useState } from "react";

//CSS
import './App.css'

//Components
import ProductList from "./components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')

  interface User {
    id: number;
    name: string;
  }

  //After Render
  useEffect(() => {
    //Side Effect
    if (ref.current) ref.current.focus();
  }, []);

  useEffect(() => {
    document.title = "My App";
  });

  useEffect(() => {
    connect();
    return () => disconnect();
  });

  useEffect(() => {
    const fetchUsers = async () => {

      try {
        const addressUsers = "https://jsonplaceholder.typicode.com/xusers"
        const res = await axios
        .get<User[]>(addressUsers)
        setUsers(res.data)
      }
      catch (err) {
        setError((err as AxiosError).message);
      }
      
    }

    fetchUsers()
    //Get => await Promise => res
    //.then(res => setUsers(res.data))
    //.catch(err => setError(err.message));
  },[] )
  
    
  return (
      <>
        <div className="container mt-4">
          <select name="" id="" className="form-select" onChange={(event) => setCategory(event.target.value)}>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Holsehold</option>
          </select>
          <ProductList category={category}/>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </>
    )
}

export default App
