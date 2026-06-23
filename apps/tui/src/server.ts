import { createServer, logging } from "@opentui/ssh";
import { PersonalTui } from "./app";

const server = createServer({
  hostKey: { path: process.env.HOST_KEY_PATH || "./host_key" },
  auth: "open",
  idleTimeout: "10m",
  maxTimeout: "1h",
})
  .use(logging())
  .serve((session) => {
    const { renderer } = session;
    new PersonalTui(renderer);
  });

await server.listen(Number(process.env.PORT) || 22, "0.0.0.0");
