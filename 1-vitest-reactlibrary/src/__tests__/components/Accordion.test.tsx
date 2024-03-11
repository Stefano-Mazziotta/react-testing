import { describe, test, expect } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Accordion } from "../../components/Accordion";

describe("<Accordion />", () => {
  beforeEach(() => {
    render(
      <Accordion title="open the accordion">
        <p>Accordion's content</p>
      </Accordion>
    );
  });

  test("Should render the accordion's title all the time", () => {
    const accordion = screen.getByText("→ open the accordion");
    expect(accordion).toBeDefined();
  });

  test("Should not render the content at the start", () => {
    const content = screen.queryByText(/content/i);
    expect(content).toBeNull();
  });

  test("Should render the content when the accordion is clicked", () => {
    const header = screen.getByText(/open/i);
    expect(header).toBeInTheDocument();

    fireEvent.click(header);

    const content = screen.queryByText(/content/i);
    expect(content).toBeInTheDocument();
  });

  test("Should hide the content when the accordion is clicked", () => {
    const header = screen.getByText(/open/i);
    expect(header).toBeInTheDocument();

    fireEvent.click(header);
    fireEvent.click(header);

    const content = screen.queryByText(/content/i);
    expect(content).toBeNull();
  });
});
