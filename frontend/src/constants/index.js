export const REACT_APP_BACKEND = process.env.REACT_APP_BACKEND;

// GitHub OAuth Login
export const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const REACT_APP_GITHUB_CLIENT_SECRET =
  process.env.REACT_APP_GITHUB_CLIENT_SECRET;
export const REACT_APP_GITHUB_CLIENT_ID =
  process.env.REACT_APP_GITHUB_CLIENT_ID;
export const REACT_APP_PROXY_URL = process.env.REACT_APP_PROXY_URL;
export const REACT_APP_GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
export const REACT_APP_POST_PROXY_URL = process.env.REACT_APP_POST_PROXY_URL;

// Google OAuth Login
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
export const GOOGLE_OAUTH_URL = process.env.REACT_APP_GOOGLE_OAUTH_URL;
