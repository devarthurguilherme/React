import {useState, useEffect} from "react";

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("Fetching Products in", category);
        setProducts(["Clothings", "Household"]);
    }, [category])

  return (
    <div>ProductList</div>
  )
}

export default ProductList