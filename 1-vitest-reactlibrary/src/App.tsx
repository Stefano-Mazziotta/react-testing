import { useState } from "react";

import "./App.css";
import { product } from "./models/product";
import { ProductList } from "./components/ProductList";
import { changeOrderByPrice } from "./helpers/changeOrderByPrice";
import { Accordion } from "./components/Accordion";

const initialProducts: product[] = [
  { id: 1, name: "Smartphone", price: 900 },
  { id: 2, name: "Tablet", price: 600 },
  { id: 3, name: "Gaming computer", price: 200 },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <section className="container">
      <article className="">
        <ProductList items={products} />
        <button
          className="btn"
          onClick={() => setProducts(changeOrderByPrice(products))}
        >
          Order by price
        </button>
      </article>
      <article>
        <Accordion title="Open accordion">
          <p>test</p>
        </Accordion>
      </article>
    </section>
  );
}

export default App;
