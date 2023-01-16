import Application from "./app/application";

const app = new Application(3000);
app.use(Route.get("/hello", () => {}))