import React from "react";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, TRENDING_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

let firstMount = true;
let isWlecomeMssgLoaded = false;

const URL_TREND = `${API_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}`;
let TREND_OFFSET = 0;
let fetchedDatas = [];

const TEXT_MSSG = { text: "Welcome...", type: "message" };
const ALERT_MSSG = { text: "Loading...", type: "alert" };
const ERROR_MSSG = {
  text: "Sorry 😔. Something went wrong",
  type: "error",
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHTTP();

  const getTrendingDatas = (datas) => {
    datas.data.map((element) => {
      fetchedDatas.push(element.images.original.url);
    });
    TREND_OFFSET += 50;
  };

  useEffect(() => {
    sendRequest(
      { url: `${URL_TREND}&offset=${TREND_OFFSET}` },
      getTrendingDatas
    );
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(ALERT_MSSG));
      }
      if (!isLoading && !error && !isWlecomeMssgLoaded) {
        dispatch(uiActions.sendMessage(TEXT_MSSG));
        isWlecomeMssgLoaded = true;
      }
    } else {
      firstMount = false;
    }
  }, [error, isLoading]);

  const getMoreDatas = () => {
    sendRequest(
      { url: `${URL_TREND}&offset=${TREND_OFFSET}` },
      getTrendingDatas
    );
  };

  return (
    <ItemGrid
      datas={fetchedDatas}
      scroll={{ trigger: 75, onEvent: getMoreDatas }}
    />
  );
};

export default HomePage;
