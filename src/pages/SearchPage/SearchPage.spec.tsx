import "@testing-library/jest-dom";
import mockFetch from "jest-fetch-mock";
import GifCardsData from "./GifCards.data.mocks.json";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import SearchPage from "./SearchPage";
import { MemoryRouter } from "react-router-dom";
import { GiphyAppService } from "services/giphyApi.service";

const waitForATime = new Promise((resolve) => setTimeout(resolve, 3000));

const SearchPageFactory = async () => {
  jest.spyOn(GiphyAppService, "findTrendingBy").mockResolvedValue(GifCardsData);

  const renderMethods = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["http://localhost:3000/search/pet"]}>
        <SearchPage />
      </MemoryRouter>
    </Provider>
  );
  // return {
  //   ...renderMethods,
  //   gifCards: renderMethods.getByTestId("GifCards"),
  //   card: await renderMethods.findAllByTestId("Card"),
  // };
};

describe("HomePage Pages", () => {
  it("the page should render the GifCards", async () => {
    // await act(async () => {
      await SearchPageFactory();
    // });

    await waitFor(() => {
      expect(screen.getByTestId("GifCards")).toBeInTheDocument();
    });
    // await waitForATime;
  });

  // it("the page should load the data of cards and pase it to the GifCards component", async () => {
    
  //    await SearchPageFactory();

  //   await waitFor(async () => {
  //     const allCards = await screen.findAllByTestId("Card");
  //     expect(allCards.length).toBe(GifCardsData.length);
  //   }, { timeout: 8000 });
  // });

  // it("more data should append to the existing data when the scroll is above the scroll.trigger", async () => {
  //   const { gifCards } = await HomePageFactory();

  //   act(() => {
  //     fireEvent.scroll(gifCards, {
  //       target: {
  //         scrollTop: 81, // <-- the trigger is 80
  //         getBoundingClientRect: () => ({
  //           height: -100,
  //         }),
  //       },
  //     });
  //   });

  //   await waitFor(
  //     async () => {
  //       const card = await screen.findAllByTestId("Card");
  //       expect(card.length).toBeGreaterThan(GifCardsData.length);
  //     },
  //     { timeout: 3000 }
  //   );
  // });
});
