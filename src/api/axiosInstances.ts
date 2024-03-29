import type { AxiosInstance } from "axios";
import axios from "axios";

/** axios инстанс */
const axiosAPI: AxiosInstance = axios.create(
  Object.assign({
    baseURL: "https://test-front.framework.team/",
    withCredentials: false,
  }),
);
export default axiosAPI;
