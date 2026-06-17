import {
  ASCIIFont,
  Box,
  BoxRenderable,
  fg,
  StyledText,
  Text,
  TextAttributes,
  type TextChunk,
} from "@opentui/core";
import type { SceneController, SceneCtx } from "./types";
import { basic as basicData, about as aboutData } from "@personal/data";

export function renderAbout(ctx: SceneCtx): SceneController {
  const { renderer, theme, host } = ctx;

  const aboutParagraph = aboutData.map((paragraph) => {
    const content: TextChunk[] = paragraph.map((segment) => {
      if (typeof segment === "string") return fg(theme.body)(segment);
      return fg(theme.accent)(segment.label);
    });

    return Text({
      content: new StyledText(content),
    });
  });

  const about = new BoxRenderable(renderer, {
    id: "about",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  });

  about.add(
    ASCIIFont({
      text: basicData.name,
      font: "tiny",
      color: theme.accent,
    }),
  );

  about.add(
    Box(
      { alignItems: "center", justifyContent: "center", flexShrink: 0 },
      Text({
        content: basicData.role,
        fg: theme.heading,
        attributes: TextAttributes.BOLD,
      }),
      Text({
        content: basicData.blurb,
        fg: theme.body,
      }),
    ),
  );

  about.add(Box({ gap: 1 }, ...aboutParagraph));

  host?.add(about);

  return {
    destroy() {
      host?.remove(about.id);
      about.destroy();
    },
  };
}
