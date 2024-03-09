import { useState } from "react";

import "./App.css";
import { product } from "./models/product";
import { ProductList } from "./components/ProductList";
import { changeOrderByPrice } from "./helpers/changeOrderByPrice";

const initialProducts: product[] = [
  { id: 1, name: "Smartphone", price: 900 },
  { id: 2, name: "Tablet", price: 600 },
  { id: 3, name: "Gaming computer", price: 200 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <div className="">
      <ProductList items={products} />
      <button onClick={() => setProducts(changeOrderByPrice(products))}>
        Order by price
      </button>
    </div>
  );
}

export default App;
