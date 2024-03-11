import { describe, test, expect } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

import App from "../App";

describe("<App />", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Should render a list of products and a button to order them", () => {
    const products = screen.getAllByRole("listitem");
    expect(products).toHaveLength(3);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should order products by price when the button is clicked", async () => {
    const button = screen.getByRole("button");

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      const products = screen.getAllByRole("listitem");
      expect(products[0]).toHaveTextContent("Gaming computer");
      expect(products[1]).toHaveTextContent("Tablet");
      expect(products[2]).toHaveTextContent("Smartphone");
    });
  });
});
