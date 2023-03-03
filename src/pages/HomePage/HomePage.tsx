import { FC, memo, useCallback, useEffect, useState } from "react";
import ItemGrid from "../../components/GifCards/GifCards";
import { MarvelAppService } from "services/giphyApi.service";
import { ITrending } from "models/Trending.type";
import { useAppDispatch } from "redux/app/hooks";
import { sendMessage } from "redux/reducers/ui.actions";
import { MSSG } from "global/messages";

let TREND_OFFSET = 0;

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  const dispatch = useAppDispatch();
  const [fetchedDatas, setFetchedDatas] = useState<ITrending>([]);

  const fetchGifData = useCallback(
    (call: "mount" | "scroll") => {
      if (call === "mount") {
        dispatch(sendMessage(MSSG.ALERT));
        setFetchedDatas([]);
      }

      MarvelAppService.fetchTrending({ offset: TREND_OFFSET })
        .then((data) => {
          TREND_OFFSET += 50;
          setFetchedDatas((state) => [...state, ...data]);
          if (call === "mount") dispatch(sendMessage(MSSG.HOME));
        })
        .catch(() => {
          dispatch(sendMessage(MSSG.ERROR));
        });
    },
    [TREND_OFFSET]
  );

  useEffect(() => {
    fetchGifData("mount");
  }, []);

  return (
    <ItemGrid
      datas={fetchedDatas}
      scroll={{
        trigger: 75,
        onEvent: () => fetchGifData("scroll"),
      }}
    />
  );
};

export default memo(HomePage);
