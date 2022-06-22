const production = process.env.VERCEL_ENV === "production";
const VERCEL_ENV = process.env.VERCEL_ENV || "local";

function getExcludedConsole() {
  const excluded = ["error"];

  if (!production) {
    excluded.push("log");
    excluded.push("warn");
    excluded.push("dir");
    excluded.push("info");
    excluded.push("debug");
  }

  return excluded;
}

const HTTPS = Boolean(process.env.HTTPS) ? "https" : "http";
const HOST = process.env.VERCEL ? "" : `${HTTPS}://${process.env.HOST || "localhost:3000"}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: getExcludedConsole(),
    },
  },
  env: {
    production,
  },
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },
  serverRuntimeConfig: {
    API_HOST: HOST,
  },
  publicRuntimeConfig: {
    VERCEL_ENV,
    COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || "local-development",
    API_HOST: HOST,
  },
};

module.exports = nextConfig;
