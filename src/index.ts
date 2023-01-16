import Application from "./app/application";
import Route from "./app/router";
import { IncomingMessage, ServerResponse } from "http";

const app = new Application();

app.use(
  Route.get("/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  })
);
app.use(
  Route.post("/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  })
);
app.use(
  Route.put("/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  })
);
app.use(
  Route.delete("/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
  })
);

app.use(
  Route.get("*", (req, res) => {
    if (res.writableEnded) return;

    res.writeHead(404);
    res.end(`There is no handler registered for url "${req.url}"`);
  })
);

app.start(3000);
