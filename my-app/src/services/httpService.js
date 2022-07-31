import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.appUrl;

function setCommonHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

export const httpService = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
  setCommonHeader,
};

export default httpService;
