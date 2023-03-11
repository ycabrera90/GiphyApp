import "@testing-library/jest-dom";
import GifCardsData from "./GifCards.data.mocks.json";
import SearchPage from "./SearchPage";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { GiphyAppService } from "services/giphyApi.service";

const SearchPageFactory = () => {
  jest.spyOn(GiphyAppService, "findTrendingBy").mockResolvedValue(GifCardsData);
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["http://localhost:3000/search/pet"]}>
        <SearchPage />
      </MemoryRouter>
    </Provider>
  );
};

describe("HomePage Pages", () => {
  it("the page should render the GifCards", async () => {
    await act(async () => {
      SearchPageFactory();
    });

    await waitFor(() => {
      expect(screen.getByTestId("GifCards")).toBeInTheDocument();
    });
  });

  it("the page should load the data of cards and pase it to the GifCards component", async () => {
    await act(async () => {
      SearchPageFactory();
    });

    await waitFor(async () => {
      const allCards = await screen.findAllByTestId("Card");
      expect(allCards.length).toBe(GifCardsData.length);
    });
  });

  it("more data should append to the existing data when the scroll is above the scroll.trigger", async () => {
    await act(async () => {
      SearchPageFactory();
    });

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
      expect(card.length).toBe(GifCardsData.length * 2);
    });
  });
});
