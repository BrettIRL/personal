import { renderList, type ListItem } from "~/components/list";
import type { SceneCtx } from "./types";

import { bold, fg, link, StyledText, t } from "@opentui/core";
import { projects, type Project } from "@personal/data";
import type { Theme } from "~/theme";

const projectItems = (theme: Theme): ListItem[] => {
  return projects.map((p: Project, i: number) => {
    const gutterText = String(i + 1).padStart(2, "0");
    return {
      gutter: (sel: boolean): StyledText =>
        t`${sel ? fg(theme.accent)(bold(gutterText)) : fg(theme.gutter)(gutterText)}`,
      title: (sel: boolean): StyledText =>
        p.link
          ? t`${sel ? fg(theme.accent)(bold(p.name)) : fg(theme.heading)(bold(p.name))} ${fg(theme.link)(link(p.link)("↗"))}`
          : t`${sel ? fg(theme.accent)(bold(p.name)) : fg(theme.heading)(bold(p.name))}`,
      desc: p.description,
      note: p.note,
      chips: p.technologies,
      link: p.link,
    };
  });
};

export function renderProjects(ctx: SceneCtx) {
  return renderList(ctx, "Projects", projectItems(ctx.theme));
}
