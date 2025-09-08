import axios, { AxiosHeaders } from "axios";
import qs from "qs";
import store from "../redux/store";

const axiosClient = axios.create({
  baseURL: "https://api.mero.doctor/api/v3/user",
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosClient.interceptors.request.use((config) => {
  const state = store.getState();
  const auth = state.auth;

  // Create a proper AxiosHeaders object
  const headers = new AxiosHeaders(config.headers);

  headers.set("Apiversion", auth.apiVersion);
  headers.set("Appversion", auth.appVersion);
  headers.set("Appversioncode", auth.appVersionCode);
  headers.set("Orgid", auth.orgId);
  headers.set("Apikey", auth.apiKey);

  config.headers = headers;
  return config;
});

export { qs };
export default axiosClient;
