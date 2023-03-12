import "@testing-library/jest-dom";
import mockFetch from "jest-fetch-mock";
import GifCardsData from "./GifCards.data.mocks.json";
import HomePage from "./HomePage";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { GiphyAppService } from "services/giphyApi.service";

mockFetch.mockResponse((req) => {
  if (req.url.includes("https://api.giphy.com/v1/gifs/trending")) {
    return Promise.resolve(JSON.stringify(GifCardsData));
  }
  return Promise.reject(new Error("not mapped url"));
});

const HomePageFactory = () => {
  jest.spyOn(GiphyAppService, "fetchTrending").mockResolvedValue(GifCardsData);
  act(() => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });
};

describe("HomePage Pages", () => {
  it("the page should render the GifCards", async () => {
    HomePageFactory();

    await waitFor(() => {
      expect(screen.getByTestId("GifCards")).toBeInTheDocument();
    });
  });

  it("the page should load the data of cards and pase it to the GifCards component", async () => {
    HomePageFactory();

    await waitFor(async () => {
      const allCards = await screen.findAllByTestId("Card");
      expect(allCards.length).toBe(GifCardsData.length);
    });
  });

  it("more data should append to the existing data when the scroll is above the scroll.trigger", async () => {
    HomePageFactory();

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

    await waitFor(async () => {
      const card = await screen.findAllByTestId("Card");
      expect(card.length).toBeGreaterThan(GifCardsData.length);
    });
  });
});
