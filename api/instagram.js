// external
import memo from "fast-memoize";
import fetch from "isomorphic-unfetch";

// internal
import cfg from "../config";

const instagram = memo(endpoint =>
  fetch(
    [
      cfg.INSTA_API,
      "users",
      cfg.INSTA_USER,
      `${endpoint}?access_token=${cfg.INSTA_TOKEN}`
    ].join("/")
  )
    .then(res => res.json())
    .then(res => res.data)
    .catch(console.error)
);

export const getLatestPhotos = () => instagram("media/recent");
