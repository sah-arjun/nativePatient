import axios from "axios";
import qs from "qs"; // for urlencoded data

const axiosClient = axios.create({
  baseURL: "https://api.mero.doctor/api/v3/user",
  headers: {
    Apiversion: "v3",
    Appversion: "0.0.30-DEBUG",
    Appversioncode: "56",
    Orgid: "614",
    Apikey: "de3f1c39f8c03a3401303fdeb9748668",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  withCredentials: true, // send cookies if needed
});

export default axiosClient;
export { qs };
