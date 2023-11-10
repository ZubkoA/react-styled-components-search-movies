import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "5257856f789bada50296aabdc3a8b8f3";

export const getMovieDetails = (id) => {
  return axios(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};
