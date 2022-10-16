import React from "react";
import { useEffect } from "react";
import useHTTP from "../../hooks/use-HTTP";
import { API_URL, API_KEY, TRENDING_ENDPOINT } from "../../credentials";
import ItemGrid from "../../components/ItemGrid/ItemGrid";

let fetchedDatas = [];

const HomePage = () => {
  const { isLoading, error, sendRequest } = useHTTP();

  const getTrendingDatas = (datas) => {
    fetchedDatas = datas.data.map((element) => element.images.original.url);
  };

  useEffect(() => {
    const fetchConfig = {
      url: `${API_URL}${TRENDING_ENDPOINT}?api_key=${API_KEY}`,
    };
    sendRequest(fetchConfig, getTrendingDatas);
  }, []);

  return <ItemGrid datas={fetchedDatas} />;
};

export default HomePage;
