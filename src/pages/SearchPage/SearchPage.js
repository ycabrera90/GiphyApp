import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, SEARCH_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

let firstMount = true;
let isSeachtTextLoaded = false;

const URL_SEARCH = `${API_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}`;
let TREND_OFFSET = 0;
let fetchedDatas = [];

const ALERT_MSSG = { text: "Loading...", type: "alert" };
const ERROR_MSSG = {
  text: "Sorry 😔. Something went wrong",
  type: "error",
};

const SearchPage = () => {
  const dispatch = useDispatch();
  const { text: searchText } = useParams();
  const { isLoading, error, sendRequest } = useHTTP();

  const getSearchedDatas = (datas) => {
    datas.data.map((element) => {
      fetchedDatas.push(element.images.original.url);
    });
    TREND_OFFSET += 50;
  };

  useEffect(() => {
    sendRequest({ url: `${URL_SEARCH}&q=${searchText}` }, getSearchedDatas);
    isSeachtTextLoaded = false;
  }, [searchText]);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(ALERT_MSSG));
      }

      if (!isLoading && !error && !isSeachtTextLoaded) {
        dispatch(uiActions.sendMessage({ text: searchText, type: "message" }));
        isSeachtTextLoaded = true;
      }
    } else {
      firstMount = false;
    }
  }, [error, isLoading]);

  const getMoreDatas = () => {
    sendRequest(
      { url: `${URL_SEARCH}&q=${searchText}&offset=${TREND_OFFSET}` },
      getSearchedDatas
    );
  };

  return (
    <ItemGrid
      datas={fetchedDatas}
      scroll={{ trigger: 75, onEvent: getMoreDatas }}
    />
  );
};

export default SearchPage;
