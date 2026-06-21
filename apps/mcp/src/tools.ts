import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { about, experience, projects } from "@personal/data";
import { pitch } from "./pitch";

function getSkills() {
  const counts = new Map<string, number>();
  for (const job of experience) {
    for (const tech of job.technologies) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }
  for (const project of projects) {
    for (const tech of project.technologies) {
      counts.set(tech, (counts.get(tech) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function registerTools(server: McpServer) {
  server.registerTool(
    "get-summary",
    {
      description:
        "Get a complete summary of Brett Cocking's professional background, including current role, experience highlights, key skills, and links",
    },
    async () => {
      const skills = getSkills();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                name: "Brett Cocking",
                title: "Full Stack Engineer",
                currentRole: {
                  role: experience[0].role,
                  company: experience[0].company,
                  period: `${experience[0].from} - ${experience[0].to}`,
                },
                totalExperience: `${experience.length} positions across ${experience.length} companies`,
                topSkills: skills.slice(0, 7).map((s) => s.name),
                links: {
                  github: "https://github.com/BrettIRL",
                  linkedin: "https://linkedin.com/in/brett-c",
                },
              },
              null,
              2,
            ),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get-about",
    {
      description:
        "Get Brett's personal background and career narrative, presented as paragraphs with embedded links to notable companies and projects he's worked with",
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(about, null, 2),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get-experience",
    {
      description:
        "Get Brett's work history, optionally filtered by company name or technology",
      inputSchema: {
        company: z.string().optional(),
        technology: z.string().optional(),
      },
    },
    async ({ company, technology }) => {
      let results = experience;
      if (company) {
        const q = company.toLowerCase();
        results = results.filter((j) => j.company.toLowerCase().includes(q));
      }
      if (technology) {
        const q = technology.toLowerCase();
        results = results.filter((j) =>
          j.technologies.some((t) => t.toLowerCase().includes(q)),
        );
      }
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get-projects",
    {
      description:
        "Get Brett's side and professional projects, optionally filtered by technology",
      inputSchema: {
        technology: z.string().optional(),
      },
    },
    async ({ technology }) => {
      let results = projects;
      if (technology) {
        const q = technology.toLowerCase();
        results = results.filter((p) =>
          p.technologies.some((t) => t.toLowerCase().includes(q)),
        );
      }
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(results, null, 2),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get-skills",
    {
      description:
        "Get all technologies Brett has worked with, ranked by frequency across experience and projects",
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(getSkills(), null, 2),
          },
        ],
      };
    },
  );

  server.registerTool(
    "get-pitch",
    {
      description:
        "Get Brett's personal mission statement and core strengths, suitable for understanding what drives him and what he excels at",
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(pitch, null, 2),
          },
        ],
      };
    },
  );
}
