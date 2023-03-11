import { FC, memo, useCallback, useEffect, useState } from "react";
import ItemGrid from "../../components/GifCards/GifCards";
import { GiphyAppService } from "services/giphyApi.service";
import { ITrending } from "models/Trending.type";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "redux/app/hooks";
import { sendMessage } from "redux/reducers/ui.actions";
import { MSSG } from "global/messages";

let SEARCH_OFFSET = 0;

interface ISearchPageProps {}

const SearchPage: FC<ISearchPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [fetchedDatas, setFetchedDatas] = useState<ITrending>([]);
  const { text: queryText } = useParams<{ text: string }>();

  const fetchGifData = useCallback(
    (call: "mount" | "scroll") => {
      if (call === "mount") {
        dispatch(sendMessage(MSSG.ALERT));
        setFetchedDatas([]);
      }

      GiphyAppService.findTrendingBy({
        offset: SEARCH_OFFSET,
        queryText,
      })
        .then((data) => {
          console.log(data);
          SEARCH_OFFSET += 50;
          setFetchedDatas((state) => [...state, ...data]);
          if (call === "mount")
            dispatch(sendMessage({ text: queryText, type: "message" }));
        })
        .catch(() => {
          dispatch(sendMessage(MSSG.ERROR));
        });
    },
    [queryText, SEARCH_OFFSET]
  );

  useEffect(() => {
    fetchGifData("mount");
  }, [queryText]);

  return (
    <ItemGrid
      data={fetchedDatas}
      scroll={{
        trigger: 75,
        onEvent: () => fetchGifData("scroll"),
      }}
    />
  );
};

export default memo(SearchPage);
