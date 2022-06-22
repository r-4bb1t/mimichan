import getConfig from "next/config";

export function config() {
  return getConfig().serverRuntimeConfig || getConfig().publicRuntimeConfig;
}
