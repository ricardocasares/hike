const routes = require("next-routes");

module.exports = routes()
  .add("changelog")
  .add("post", "/changelog/:id/:slug");
