const routes = require("next-routes")();

routes
  .add("index", "/")
  .add("changelog", "/changelog")
  .add("post", "/changelog/:slug/:id");

module.exports = routes;
