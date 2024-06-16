/** @type {import("next").NextConfig} */
const nextConfig = {
  env: {
    fb_api_key: process.env.FB_API_KEY,
    fb_auth_domain: process.env.FB_AUTH_DOMAIN,
    fb_project_id: process.env.FB_PROJECT_ID,
    fb_storage_bucket: process.env.FB_STORAGE_BUCKET,
    fb_messaging_sender_id: process.env.FB_MESSAGING_SENDER_ID,
    fb_app_id: process.env.FB_APP_ID,
    fb_measurement_id: process.env.FB_MEASUREMENT_ID,
  }
};

module.exports = nextConfig;
