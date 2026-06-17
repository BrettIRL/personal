import { fg, link, type TextChunk } from "@opentui/core";
import type { Theme } from "~/theme";

export function letterSpace(text: string): string {
  return text.toUpperCase().split("").join(" ");
}

export function linkChunk(label: string, url: string, theme: Theme): TextChunk {
  return fg(theme.link)(link(url)(`${label} ↗`));
}
