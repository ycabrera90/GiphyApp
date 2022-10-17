import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, SEARCH_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

let fetchedDatas = [];
let firstMount = true;
const URL_SEARCH = `${API_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}`;
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
    fetchedDatas = datas.data.map((element) => element.images.original.url);
  };

  useEffect(() => {
    sendRequest({ url: `${URL_SEARCH}&q=${searchText}` }, getSearchedDatas);
  }, [searchText]);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(ERROR_MSSG));
      }

      if (isLoading) {
        dispatch(uiActions.sendMessage(ALERT_MSSG));
      }

      if (!isLoading && !error) {
        dispatch(uiActions.sendMessage({ text: searchText, type: "message" }));
      }
    } else {
      firstMount = false;
    }
  }, [error, isLoading]);

  return <ItemGrid datas={fetchedDatas} />;
};

export default SearchPage;
