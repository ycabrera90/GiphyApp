import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useHTTP from "../../hooks/use-HTTP";
import { uiActions } from "../../store/ui-slice";
import { URL_TREND } from "../../store/urls";
import MSSG from "../../store/messages";

import ItemGrid from "../../components/ItemGrid/ItemGrid";

let firstMount = true;
let isWlecomeMssgLoaded = false;
let TREND_OFFSET = 0;                       // <-- initial value for fetch datas
let fetchedDatas = [];                      // <-- initial value of fetched datas

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHTTP();

  const getFetchedDatas = ({data}) => {
    fetchedDatas = data.map(({ images }) => images.fixed_height.url);
    TREND_OFFSET += 50;
  };

  const getMoreFetchedDatas = (datas) => {
    datas.data.forEach(({ images }) => {
      fetchedDatas.push(images.fixed_height.url);
    });
    TREND_OFFSET += 50;
  };

  useEffect(() => {
    sendRequest({ url: `${URL_TREND}&offset=${TREND_OFFSET}` }, getFetchedDatas);
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(MSSG.ERROR));
      }

      if (isLoading && !isWlecomeMssgLoaded) {
        dispatch(uiActions.sendMessage(MSSG.ALERT));
      }

      if (!isLoading && !error && !isWlecomeMssgLoaded) {
        dispatch(uiActions.sendMessage(MSSG.HOME));
        isWlecomeMssgLoaded = true;
      }
    } else {
      firstMount = false;
    }
  }, [error, isLoading]);

  const getMoreDatas = () => {
    sendRequest({ url: `${URL_TREND}&offset=${TREND_OFFSET}` }, getMoreFetchedDatas);
  };

  return (
    <ItemGrid
      datas={fetchedDatas}
      scroll={{ trigger: 75, onEvent: getMoreDatas }}
    />
  );
};



export default HomePage;
