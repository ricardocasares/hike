const routes = require("next-routes")();

routes
  .add("index", "/")
  .add("photos", "/photos")
  .add("post", "/changelog/:id/:slug");

module.exports = routes;
