import { createMcpHandler } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools";

function createServer() {
  const server = new McpServer({
    name: "Brett Cocking",
    version: "1.0.0",
  });
  registerTools(server);
  return server;
}

export default {
  fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    const server = createServer();
    return createMcpHandler(server)(request, env, ctx);
  },
};
