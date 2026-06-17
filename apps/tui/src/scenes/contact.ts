import { bold, fg, link, StyledText, t } from "@opentui/core";
import { links } from "@personal/data";
import type { Theme } from "~/theme";
import type { SceneCtx } from "./types";
import { renderList, type ListItem } from "~/components/list";

function contactItems(theme: Theme): ListItem[] {
  return Object.values(links).map((entry) => ({
    gutter: (sel: boolean): StyledText =>
      sel
        ? t`${fg(theme.accent)(bold(entry.label))}`
        : t`${fg(theme.gutter)(entry.label)}`,
    title: (sel: boolean): StyledText =>
      sel
        ? t`${fg(theme.link)(bold(link(entry.url)(entry.url)))}`
        : t`${fg(theme.link)(link(entry.url)(entry.url))}`,
    link: entry.url,
  }));
}

export function renderContact(ctx: SceneCtx) {
  return renderList(ctx, "Links", contactItems(ctx.theme));
}
