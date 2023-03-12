import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Card from "./Card";

const imageUrl = "https://some-test-url.com/";

const CardFactory = () => {
  render(<Card imageUrl={imageUrl} />);
};

describe("Card Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    act(() => {
      CardFactory();
    });

    await waitFor(() => {
      expect(screen.getByTestId("Card")).not.toBeEmptyDOMElement();
    });
  });

  it("the image of the card should be loaded based on the imageUrl prop", async () => {
    act(() => {
      CardFactory();
    });

    await waitFor(() => {
      const card = screen.getByTestId("Card");
      const image = card.querySelector("img") as HTMLImageElement;
      expect(image.src).toBe(imageUrl);
    });
  });

  it("the skeleton should load when the image is loading", async () => {
    act(() => {
      CardFactory();
    });

    await waitFor(() => {
      const card = screen.getByTestId("Card");
      expect(card.querySelector("svg")).toBeInTheDocument();
    });
  });

  it("the skeleton should not be rendered when the image is loaded", async () => {
    act(() => {
      CardFactory();
    });

    act(() => {
      const card = screen.getByTestId("Card");
      fireEvent.load(card.querySelector("img") as HTMLImageElement);
    });

    act(() => {
      const card = screen.getByTestId("Card");
      expect(card.querySelector("svg")).not.toBeInTheDocument();
    });
  });
});
