import { describe, it, expect } from "vitest";
import { changeOrderByPrice } from "../../helpers/changeOrderByPrice";
import { product } from "../../models/product";

const mockProducts: product[] = [
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

describe("changeOrderByPrice", () => {
  it("Should order all products by price in descending order", () => {
    const result = changeOrderByPrice(mockProducts);
    const cheaperProduct: product = {
      id: 3,
      name: "Jamón Cocido",
      price: 50,
    };

    const expensiveProduct: product = {
      id: 2,
      name: "Jamón Ibérico",
      price: 200,
    };

    expect(result[0]).toEqual(cheaperProduct);
    expect(result[2]).toEqual(expensiveProduct);
  });
});
