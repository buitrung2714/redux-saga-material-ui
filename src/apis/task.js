import axiosService from "../common/axiosService";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = "tasks";

export const getList = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

export const addTask = (req) => {
  return axiosService.post(`${API_ENDPOINT}${url}`, req);
};
