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
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

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
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false);
      })
      
    

      return () => controller.abort();
    }, []);
  
    const deleteUser = (user: User) => {
      const originalUsers = [...users];
      setUsers(users.filter(u => u.id !== user.id));
      axios.delete("https://jsonplaceholder.typicode.com/users" + user.id)
        .catch(
          err => {
            setError(err.message);
            setUsers(originalUsers);
          }
        )
    }

  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: "Mosh"};
    setUsers([newUser, ...users]);

    axios.post("https://jsonplaceholder.typicode.com/xusers", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }
    
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
        {isLoading && <div className="spinner-border"></div>}
        <button 
          className="btn btn-primary mb-3"
          onClick={addUser}
        >
          Add
        </button>
        <ul className="list-group">
          {users.map(user => 
            <li 
              className="list-group-item d-flex justify-content-between"
              key={user.id}>
              {user.name} 
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </li>
          )}
        </ul>
      </>
    )
}

export default App
