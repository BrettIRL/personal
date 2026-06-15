import { createMcpHandler } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools";
import { renderPage } from "./page";

function createServer() {
  const server = new McpServer({
    name: "brett-profile",
    version: "1.0.0",
  });
  registerTools(server);
  return server;
}

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(renderPage(env.MCP_URL), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
    const server = createServer();
    return createMcpHandler(server)(request, env, ctx);
  },
};
