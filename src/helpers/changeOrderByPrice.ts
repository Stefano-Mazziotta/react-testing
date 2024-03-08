import { product } from "../models/product";

export const changeOrderByPrice = (products: product[]): product[] => {
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  return sortedProducts;
};
