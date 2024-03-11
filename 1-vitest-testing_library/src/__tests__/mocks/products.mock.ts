import { product } from "../../models/product";

export const mockProducts: product[] = [
  {
    id: 2,
    name: "Jamón Ibérico",
    price: 200,
  },
  {
    id: 1,
    name: "Jamón Serrano",
    price: 100,
  },
  {
    id: 3,
    name: "Jamón Cocido",
    price: 50,
  },
];

export const mockProductsSorted: product[] = [
  {
    id: 3,
    name: "Jamón Cocido",
    price: 50,
  },
  {
    id: 1,
    name: "Jamón Serrano",
    price: 100,
  },
  {
    id: 2,
    name: "Jamón Ibérico",
    price: 200,
  },
];
