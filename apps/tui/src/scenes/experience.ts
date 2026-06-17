import { renderList, type ListItem } from "~/components/list";
import type { SceneCtx } from "./types";
import { bold, fg, StyledText, t } from "@opentui/core";
import { experience, type Job } from "@personal/data";
import type { Theme } from "~/theme";
import { linkChunk } from "~/utils/helpers";

const jobItems = (theme: Theme): ListItem[] => {
  return experience.map((job: Job) => {
    const gutterText = `${job.from} — ${job.to}`;
    return {
      gutter: (sel: boolean): StyledText =>
        t`${sel ? fg(theme.accent)(bold(gutterText)) : fg(theme.gutter)(gutterText)}`,
      title: (sel: boolean): StyledText =>
        t`${sel ? fg(theme.accent)(bold(job.role)) : fg(theme.heading)(bold(job.role))}${fg(theme.body)(" @ ")}${job.link ? linkChunk(job.company, job.link, theme) : fg(theme.link)(job.company)}`,
      desc: job.description,
      chips: job.technologies,
      link: job.link,
    };
  });
};

export function renderExperience(ctx: SceneCtx) {
  return renderList(ctx, "Experience", jobItems(ctx.theme));
}
