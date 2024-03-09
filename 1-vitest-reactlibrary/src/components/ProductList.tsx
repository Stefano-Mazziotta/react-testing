import { product } from "../models/product";

export function ProductList({ items }: { items: product[] }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            {item.name} ${item.price}
          </li>
        );
      })}
    </ul>
  );
}
