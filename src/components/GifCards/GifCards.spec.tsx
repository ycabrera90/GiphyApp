import "@testing-library/jest-dom";
import GifCards from "./GifCards";
import GifCardsData from "./GifCards.data.mocks.json";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";

const GifCardsScroll = {
  trigger: 80,
  onEvent: jest.fn(),
};

const GifCardsFactory = () => {
  act(() => {
    render(<GifCards data={GifCardsData} scroll={GifCardsScroll} />);
  });
};

describe("GifCards Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    GifCardsFactory();

    await waitFor(() => {
      const gifCards = screen.getByTestId("GifCards");
      expect(gifCards).not.toBeEmptyDOMElement();
    });
  });

  it("the component should render a card by element passed in the data array", async () => {
    GifCardsFactory();

    await waitFor(async () => {
      const allCards = await screen.findAllByTestId("Card");
      expect(allCards.length).toBe(GifCardsData.length);
    });
  });

  it("scroll.onEvent should execute when the scroll of the component is above of the scroll.trigger.", async () => {
    GifCardsFactory();

    act(() => {
      const gifCards = screen.getByTestId("GifCards");
      fireEvent.scroll(gifCards, {
        target: {
          scrollTop: 81, // <-- the trigger is 80
          getBoundingClientRect: () => ({
            height: -100,
          }),
        },
      });
    });

    await waitFor(() => {
      expect(GifCardsScroll.onEvent).toHaveBeenCalled();
    });
  });

  it("scroll.onEvent should not executed when the scroll of the component is under of the scroll.trigger.", async () => {
    GifCardsFactory();

    act(() => {
      const gifCards = screen.getByTestId("GifCards");
      fireEvent.scroll(gifCards, {
        target: {
          scrollTop: 79, // <-- the trigger is 80
          getBoundingClientRect: () => ({
            height: -100,
          }),
        },
      });
    });

    await waitFor(() => {
      expect(GifCardsScroll.onEvent).not.toHaveBeenCalled();
    });
  });
});
