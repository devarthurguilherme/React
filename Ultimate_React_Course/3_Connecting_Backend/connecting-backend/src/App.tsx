import { AxiosError } from './services/api-client';
import userService, { User } from "./services/user-service";

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

  export interface User {
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
    
    setLoading(true);
    const {request, cancel} = userService.getAllUsers();
      request.then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false);
      })
      
    

      return () => cancel();
    }, []);
  
    const deleteUser = (user: User) => {
      const originalUsers = [...users];
      setUsers(users.filter(u => u.id !== user.id));
      userService.delete(user.id).catch( (err) => {
            setError(err.message);
            setUsers(originalUsers);
          }
        )
    }

  const addUser = () => {
    const originalUsers = [...users]
    const newUser = { id: 0, name: "Mosh"};
    setUsers([newUser, ...users]);

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  };

  const updateUser = (user: User) => {
    const originalUsers = [... users];
    const updatedUser = {
      ...user, name: user.name + "!"
    };
    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    
    userService.updateUser(updatedUser).catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    })
  };
    
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
              <div>
                <button 
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}  
                >Update</button>
                <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
              </div>
            </li>
          )}
        </ul>
      </>
    )
}

export default App
