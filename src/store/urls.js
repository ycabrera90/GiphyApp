const API_URL = "https://api.giphy.com/v1/gifs/";
const TRENDING_ENDPOINT = "trending";
const SEARCH_ENDPOINT = "search";



export const URL_TREND = `${API_URL}${TRENDING_ENDPOINT}?api_key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
export const URL_SEARCH = `${API_URL}${SEARCH_ENDPOINT}?api_key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
