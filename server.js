import { Server } from "@modelcontextprotocol/sdk/server/index.js";

const server = new Server(
  {
    name: "my-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {},
  }
);

console.log("MCP server started");
