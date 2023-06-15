import axios from "axios";

export const options = {
  baseURL: "http://gateway.marvel.com",
};

export default axios.create(options);
