import gifCards from "./GifCards.data.mocks.json";
import { GiphyAppService } from "./giphyApi.service";

describe("GiphyAppService Service", () => {
  it("should return the trending gifCards", async () => {
    jest.spyOn(GiphyAppService, "fetchTrending").mockResolvedValue(gifCards);
    const response = await GiphyAppService.fetchTrending({ offset: 50 });
    expect(response).toEqual(gifCards);
  });

  it("should return the trending gifCards", async () => {
    jest.spyOn(GiphyAppService, "findTrendingBy").mockResolvedValue(gifCards);
    const response = await GiphyAppService.findTrendingBy({
      offset: 50,
      queryText: "test",
    });
    expect(response).toEqual(gifCards);
  });
});
