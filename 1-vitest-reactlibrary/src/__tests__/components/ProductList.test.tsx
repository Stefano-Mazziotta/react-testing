import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductList } from "../../components/ProductList";
import { mockProducts } from "../mocks/products.mock";

describe("<ProductList />", () => {
  it("Should render a list of products", () => {
    const { length } = mockProducts;

    render(<ProductList items={mockProducts} />);
    const products = screen.getAllByRole("listitem");

    expect(products).toHaveLength(length);
  });

  it("should match snapshot", () => {
    render(<ProductList items={mockProducts} />);
    expect(screen.getByRole("list")).toMatchSnapshot();
  });
});
