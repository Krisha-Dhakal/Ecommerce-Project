import axios from "axios";

const BASE_URL = "http://localhost:8000/v1/api";

export const apiHelper = async (url, method, data) => {
  let token = localStorage.getItem("token");
  let response = await axios({
    method,
    url: BASE_URL + url,
    data,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
