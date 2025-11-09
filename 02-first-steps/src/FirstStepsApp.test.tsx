import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from "@testing-library/react";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       productname={props.productName}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });
  test("should render the correct number of ItemCounter component", () => {
    render(<FirstStepsApp />);
    const ItemCounters = screen.getAllByTestId("ItemCounter");
    expect(ItemCounters.length).toBe(4);
    //screen.debug();
  });

  test("should render ItemCounter with the corrects props", () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Nintendo Switch 2",
      quantity: 8,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Pro Controller",
      quantity: 0,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Super Smash",
      quantity: 5,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Zelda Breath of the Wild",
      quantity: 2,
    });
  });
});
