const next = require("next");
const polka = require("polka");

const { PORT = 3000, NODE_ENV } = process.env;
const app = next({ dev: NODE_ENV !== "production" });
const props = ({ query, params }) => ({ ...query, ...params });
const render = name => (req, res) => app.render(req, res, name, props(req));

app.prepare().then(() =>
  polka()
    .get("/", render("/"))
    .get("/changelog", render("/changelog"))
    .get("/changelog/:id/:slug", render("/post"))
    .get("*", app.getRequestHandler())
    .listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    })
);
