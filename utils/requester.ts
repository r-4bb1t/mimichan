import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: `${publicRuntimeConfig.API_HOST ?? serverRuntimeConfig.API_HOST}/api`,
});

export default instance;
