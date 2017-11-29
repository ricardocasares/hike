const routes = require("next-routes")();

routes
  .add("index", "/")
  .add("blog", "/blog")
  .add("post", "/blog/:slug/:id");

module.exports = routes;
