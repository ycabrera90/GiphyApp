import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Card from "./Card";

const imageUrl = "https://some-test-url.com/";

const CardFactory = async () => {
  const { getByTestId } = await render(<Card imageUrl={imageUrl} />);
  return {
    card: getByTestId("Card"),
  };
};

describe("Card Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    const { card } = await CardFactory();
    expect(card).not.toBeEmptyDOMElement();
  });

  it("the image of the card should be loaded based on the imageUrl prop", async () => {
    const { card } = await CardFactory();
    const image = card.querySelector("img") as HTMLImageElement;
    expect(image.src).toBe(imageUrl);
  });

  it("the skeleton should load when the image is loading", async () => {
    const { card } = await CardFactory();
    expect(card.querySelector("svg")).toBeInTheDocument();
  });

  it("the skeleton should not be rendered when the image is loaded", async () => {
    const { card } = await CardFactory();
    fireEvent.load(card.querySelector("img") as HTMLImageElement);
    expect(card.querySelector("svg")).not.toBeInTheDocument();
  });
});
