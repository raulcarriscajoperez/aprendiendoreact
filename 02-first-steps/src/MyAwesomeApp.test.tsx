import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    const h1 = container.querySelector("h1");

    expect(h1?.innerHTML).toContain("Raulito");
  });

  test("should render firstName and lastName -- screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();

    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('Raulito')
  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />)
    expect(container).toMatchSnapshot();
  })
});
