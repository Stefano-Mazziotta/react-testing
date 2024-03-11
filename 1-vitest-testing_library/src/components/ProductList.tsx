import { product } from "../models/product";

type productListProps = { items: product[] };

export function ProductList({ items }: productListProps) {
  return (
    <ul>
      {items.map((item) => {
        const { name, price, id } = item;
        return (
          <li key={id} value={name}>
            {name} ${price}
          </li>
        );
      })}
    </ul>
  );
}
