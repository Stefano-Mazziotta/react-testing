import { describe, expect } from "vitest";

import { changeOrderByPrice } from "../../helpers/changeOrderByPrice";
import { product } from "../../models/product";
import { mockProducts } from "../mocks/products.mock";

describe("changeOrderByPrice", () => {
  test("Should order all products by price in descending order", () => {
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
