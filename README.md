# Personal

The monorepo for my personal website.

## Structure

| Path                 | Description                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `apps/website`       | Personal website (Astro, Tailwind v4, Cloudflare Pages)                    |
| `apps/mcp`           | MCP server exposing profile via Model Context Protocol (Cloudflare Worker) |
| `packages/data`      | Shared TypeScript types and profile data                                   |
| `tooling/typescript` | Shared TypeScript config                                                   |
| `tooling/prettier`   | Shared Prettier config                                                     |

## Commands

| Command           | Action                         |
| ----------------- | ------------------------------ |
| `pnpm dev`        | Start dev server               |
| `pnpm build`      | Build all packages             |
| `pnpm typecheck`  | Type-check all packages        |
| `pnpm format:fix` | Format all files with Prettier |
