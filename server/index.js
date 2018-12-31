const polka = require("polka");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const render = name => (req, res) =>
  app.render(req, res, name, { ...req.query, ...req.params });

app.prepare().then(() =>
  polka()
    .get("/", render("/"))
    .get("/changelog", render("/changelog"))
    .get("/changelog/:id/:slug", render("/post"))
    .get("*", (req, res) => handle(req, res))
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
);
