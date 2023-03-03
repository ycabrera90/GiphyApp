import { IApiGiphyTrending } from "models/ApiGiphyTrending.type";
import { ITrending } from "models/Trending.type";

type ITrendingAdapter = (arg: IApiGiphyTrending) => ITrending;

export const trendingAdapter: ITrendingAdapter = ({ data }) => {
  return data.map(({ images }) => ({
    imageUrl: images.fixed_height.url,
  }));
};
