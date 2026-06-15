export function renderPage(mcpUrl: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Brett Cocking — MCP Server</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Inter, system-ui, sans-serif;
      background: #0f172a;
      color: #e2e8f0;
      line-height: 1.6;
      max-width: 680px;
      margin: 0 auto;
      padding: 3rem 1.5rem;
    }
    h1 { font-size: 1.75rem; font-weight: 700; margin-bottom: 0.25rem; color: #f1f5f9; }
    h2 { font-size: 1.1rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 0.75rem; color: #f1f5f9; }
    p { margin-bottom: 1rem; color: #94a3b8; }
    a { color: #38bdf8; }
    code {
      background: #1e293b;
      padding: 0.15em 0.4em;
      border-radius: 4px;
      font-size: 0.875em;
      color: #e2e8f0;
    }
    pre {
      background: #1e293b;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 0.875rem;
      border: 1px solid #334155;
      margin-bottom: 1rem;
    }
    .server-config {
      background: #1e293b;
      padding: 1.5rem;
      border-radius: 6px;
      border: 1px solid #334155;
      margin-bottom: 1rem;
      font-family: ui-monospace, "Cascadia Code", "Fira Code", monospace;
    }
    .config-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }
    .config-item:last-child {
      margin-bottom: 0;
    }
    .config-key {
      color: #38bdf8;
      font-weight: 500;
    }
    .config-value {
      color: #cbd5e1;
    }
    .badge {
      display: inline-block;
      vertical-align: middle;
      background: #1e3a5f;
      color: #7dd3fc;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      letter-spacing: 0.02em;
    }
  </style>
</head>
<body>
  <h1>Brett Cocking</h1>
  <p style="font-size: 1.05rem; margin-bottom: 1.5rem;">Full Stack Engineer &middot; <span class="badge">MCP Server</span></p>

  <p>
    A simple <a href="https://modelcontextprotocol.io">MCP</a> server with my professional profile data so that your favourite AI agent can get to know me a little bit better. 🤖
  </p>

  <h2>Server Configuration</h2>
  <div class="server-config">
    <div class="config-item">
      <span class="config-key">Name:</span>
      <span class="config-value">brett-profile</span>
    </div>
    <div class="config-item">
      <span class="config-key">URL:</span>
      <span class="config-value">https://${mcpUrl}/mcp</span>
    </div>
    <div class="config-item">
      <span class="config-key">Transport:</span>
      <span class="config-value">http</span>
    </div>
  </div>

  <h2>Tools</h2>
  <table style="width:100%; border-collapse: collapse; font-size: 0.875rem;">
    <thead>
      <tr style="border-bottom: 1px solid #334155;">
        <th style="text-align: left; padding: 0.5rem 0.75rem 0.5rem 0;">Tool</th>
        <th style="text-align: left; padding: 0.5rem 0;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #1e293b;">
        <td style="padding: 0.5rem 0.75rem 0.5rem 0;"><code>get-summary</code></td>
        <td style="padding: 0.5rem 0;">Full professional overview</td>
      </tr>
      <tr style="border-bottom: 1px solid #1e293b;">
        <td style="padding: 0.5rem 0.75rem 0.5rem 0;"><code>get-experience</code></td>
        <td style="padding: 0.5rem 0;">Work history, filterable by company or tech</td>
      </tr>
      <tr style="border-bottom: 1px solid #1e293b;">
        <td style="padding: 0.5rem 0.75rem 0.5rem 0;"><code>get-projects</code></td>
        <td style="padding: 0.5rem 0;">Projects, filterable by technology</td>
      </tr>
      <tr style="border-bottom: 1px solid #1e293b;">
        <td style="padding: 0.5rem 0.75rem 0.5rem 0;"><code>get-skills</code></td>
        <td style="padding: 0.5rem 0;">All technologies with frequency</td>
      </tr>
      <tr>
        <td style="padding: 0.5rem 0.75rem 0.5rem 0;"><code>get-pitch</code></td>
        <td style="padding: 0.5rem 0;">Personal mission and strengths</td>
      </tr>
    </tbody>
  </table>

  <h2>Links</h2>
  <p>
    <a href="https://github.com/BrettIRL">GitHub</a> &middot;
    <a href="https://linkedin.com/in/brett-c">LinkedIn</a> &middot;
    <a href="https://cocking.dev">Portfolio</a>
  </p>
</body>
</html>`;
}
