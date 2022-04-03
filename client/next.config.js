/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    API_URL: process.env.API_URL,
    API_TIMEOUT: process.env.API_TIMEOUT,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_CLUSTER: process.env.PUSHER_APP_CLUSTER,
  },
};
