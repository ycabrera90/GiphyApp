import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import useHTTP from "../../hooks/use-HTTP";
import { uiActions } from "../../store/ui-slice";
import { URL_SEARCH } from "../../store/urls";
import MSSG from "../../store/messages";

import ItemGrid from "../../components/ItemGrid/ItemGrid";



let firstMount = true;
let isSeachtTextLoaded = false;
let TREND_OFFSET = 0;                       // <-- initial value for fetch datas
let fetchedDatas = [];                      // <-- initial value of fetched datas

const SearchPage = () => {
  const dispatch = useDispatch();
  const { text: searchText } = useParams();
  const { isLoading, error, sendRequest } = useHTTP();

  const getFetchedDatas = ({ data }) => {
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
    sendRequest({ url: `${URL_SEARCH}&q=${searchText}` }, getFetchedDatas);
    isSeachtTextLoaded = false;
  }, [searchText]);

  useEffect(() => {
    if (!firstMount) {
      if (error) {
        dispatch(uiActions.sendMessage(MSSG.ERROR));
      }

      if (isLoading && !isSeachtTextLoaded) {
        dispatch(uiActions.sendMessage(MSSG.ALERT));
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
    sendRequest({ url: `${URL_SEARCH}&q=${searchText}&offset=${TREND_OFFSET}` }, getMoreFetchedDatas);
  };

  return (
    <ItemGrid
      datas={fetchedDatas}
      scroll={{ trigger: 75, onEvent: getMoreDatas }}
    />
  );
};



export default SearchPage;
