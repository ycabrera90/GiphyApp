import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, SEARCH_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";

let fetchedDatas = [];

const SearchPage = () => {
  const { text: searchText } = useParams();
  const { isLoading, error, sendRequest } = useHTTP();

  const getSearchedDatas = (datas) => {
    fetchedDatas = datas.data.map((element) => element.images.original.url);
  };

  useEffect(() => {
    const fetchConfig = {
      url: `${API_URL}${SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${searchText}`,
    };
    sendRequest(fetchConfig, getSearchedDatas);
  }, [searchText]);

  return <ItemGrid datas={fetchedDatas} />;
};

export default SearchPage;
