const routes = require("next-routes")();

routes
  .add("index", "/")
  .add("work", "/work")
  .add("changelog", "/changelog")
  .add("post", "/changelog/:id/:slug");

module.exports = routes;
