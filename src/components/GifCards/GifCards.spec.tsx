import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import GifCards from "./GifCards";
import GifCardsData from "./GifCards.data.mocks.json";

const GifCardsScroll = {
  trigger: 80,
  onEvent: jest.fn(),
};

const waitForATime = new Promise((resolve) => setTimeout(resolve, 3500));

const GifCardsFactory = async () => {
  const renderMethods = await render(
    <GifCards data={GifCardsData} scroll={GifCardsScroll} />
  );
  return {
    ...renderMethods,
    gifCards: renderMethods.getByTestId("GifCards"),
    card: renderMethods.queryAllByTestId("Card"),
  };
};

describe("GifCards Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    const { gifCards } = await GifCardsFactory();
    expect(gifCards).not.toBeEmptyDOMElement();
  });

  it("the component should render a card by element passed in the data array", async () => {
    const { card } = await GifCardsFactory();
    expect(card.length).toBe(GifCardsData.length);
  });

  it("scroll.onEvent should execute when the scroll of the component is above of the scroll.trigger.", async () => {
    const { gifCards } = await GifCardsFactory();

    fireEvent.scroll(gifCards, {
      target: {
        scrollTop: 81, // <-- the trigger is 80
        getBoundingClientRect: () => ({
          height: -100,
        }),
      },
    });

    expect(GifCardsScroll.onEvent).toHaveBeenCalled();
    await waitForATime;
  });

  it("scroll.onEvent should not executed when the scroll of the component is under of the scroll.trigger.", async () => {
    const { gifCards } = await GifCardsFactory();

    fireEvent.scroll(gifCards, {
      target: {
        scrollTop: 79, // <-- the trigger is 80
        getBoundingClientRect: () => ({
          height: -100,
        }),
      },
    });

    expect(GifCardsScroll.onEvent).not.toHaveBeenCalled();
    await waitForATime;
  });
});
