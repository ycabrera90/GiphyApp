import { trendingAdapter } from "adapters/giphyApi.adapter";
import { ITrending } from "models/Trending.type";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const API_URL = "https://api.giphy.com/v1/gifs";
const TRENDING_ENDPOINT = "/trending";
const SEARCH_ENDPOINT = "/search";

type IFetchTrending = (arg: { offset: number }) => Promise<ITrending>;
type IFindTrendingBy = (arg: { offset: number, queryText: string }) => Promise<ITrending>;

const fetchTrending: IFetchTrending = async ({ offset }) => {
  const response = await fetch(
    `${API_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}&offset=${offset}`
  );
  if (response.status !== 200) throw new Error("Error fetching data");
  const data = await response.json();
  return trendingAdapter(data);
};

const findTrendingBy: IFindTrendingBy = async ({ offset, queryText }) => {
  const response = await fetch(
    `${API_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}&offset=${offset}&q=${queryText}`
  );
  if (response.status !== 200) throw new Error("Error fetching data");
  const data = await response.json();
  return trendingAdapter(data);
};

export const GiphyAppService = {
  fetchTrending,
  findTrendingBy,
};
