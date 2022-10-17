import React from "react";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, TRENDING_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

let fetchedDatas = [];
let firstMount = true;
const URL_TREND = `${API_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}`;
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
    fetchedDatas = datas.data.map((element) => element.images.original.url);
  };

  useEffect(() => {
    sendRequest({ url: URL_TREND }, getTrendingDatas);
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(ALERT_MSSG));
      }

      if (!isLoading && !error) {
        dispatch(uiActions.sendMessage(TEXT_MSSG));
      }
    } else {
      firstMount = false;
    }
  }, [error, isLoading]);

  return <ItemGrid datas={fetchedDatas} />;
};

export default HomePage;
