import axios from "axios";
const rootUrl = "http://www.omdbapi.com/?apikey=461da771&t=";
export const getMovie = async (str) => {
  let result = await axios.get(rootUrl + str);
  return result;
};
