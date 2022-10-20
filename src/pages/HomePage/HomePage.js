import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import useHTTP from "../../hooks/use-HTTP";
import { uiActions } from "../../store/ui-slice";
import ItemGrid from "../../components/ItemGrid/ItemGrid";

import { API_URL, TRENDING_ENDPOINT } from "../../urls";

let firstMount = true;
let isWlecomeMssgLoaded = false;

const API_KEY = window.env.API_KEY;
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

  const getFetchedDatas = (datas) => {
    fetchedDatas = datas.data.map((element) => element.images.fixed_height.url);
    TREND_OFFSET += 50;
  };

  const getMoreFetchedDatas = (datas) => {
    datas.data.forEach((element) => {
      fetchedDatas.push(element.images.fixed_height.url);
    });
    TREND_OFFSET += 50;
  };

  useEffect(() => {
    sendRequest(
      { url: `${URL_TREND}&offset=${TREND_OFFSET}` },
      getFetchedDatas
    );
  }, []);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading && !isWlecomeMssgLoaded) {
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
      getMoreFetchedDatas
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
