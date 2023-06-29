import "./App.css";

import { useState, useEffect } from "react";
//Custom Hook
import { useFetch } from "./hooks/useFetch";


//url base
const url = "http://localhost:3000/products";

function App() {
  //Save data with useState
  const [products, setProducts] = useState([]);

  //Custom Hook
  const {data: items, httpConfig, loading} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  /*useEffect(() => {

    async function fetchData() {

      //answer like "res"
      const res = await fetch(url);
      const data = await res.json(); //bring like object javascript
      setProducts(data);

    }

    fetchData();
    
  }, []);*/

  //To send data (products) with a Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    //to store data
    const product = {
      name,
      price,
    };

    //to make request
    /*const res = await fetch(url, {
      method: 'POST',
      //headers of the request
      headers: {
        //type of content
        "Content-Type": "application/json"
      },
      //body of the request, format of send
      body: JSON.stringify(product),
    });

    //Dinamic Loading
    const addedProducts = await res.json() //Converting in Json

    setProducts((prevProducts) => [...prevProducts, addedProducts]); // Now you added new items to Data*/

    //Refatoring POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  return (
    <div className="App">
      <h1>Products List</h1>
      {/* loading */}
      {loading && <p>Loading data . . .</p>}
      {!loading && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} $:{product.price}</li>
        ))}
      </ul>
      )}
      <div className="Form-Box">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
           <label>
            Price:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* state loading in POST*/}
          {loading && <input type="submit" disabled value="Wait" />}
          {!loading && <input type="submit" value="To Create" />}
        </form>
      </div>
    </div>
  );
}

export default App;
