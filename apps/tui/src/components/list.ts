import {
  Box,
  BoxRenderable,
  fg,
  KeyEvent,
  ScrollBoxRenderable,
  StyledText,
  Text,
  TextAttributes,
  TextRenderable,
  type TextChunk,
} from "@opentui/core";
import { letterSpace } from "~/utils/helpers";
import type { SceneController, SceneCtx } from "~/scenes/types";

const GUTTER_WIDTH = 14;
const lastSelection = new Map<string, number>();

export interface ListItem {
  gutter: (selected: boolean) => StyledText;
  title: (selected: boolean) => StyledText;
  desc?: string;
  note?: string;
  chips?: string[];
  link?: string;
}

export function renderList(
  ctx: SceneCtx,
  heading: string,
  items: ListItem[],
): SceneController {
  const { renderer, host, theme, toast } = ctx;
  let selected = Math.min(
    lastSelection.get(heading) ?? 0,
    Math.max(0, items.length - 1),
  );
  const rowItems: BoxRenderable[] = [];
  const paints: ((sel: boolean) => void)[] = [];

  const rows = items.map((item, rowIdx) => {
    const gutter = new TextRenderable(renderer, {
      content: item.gutter(false),
      fg: theme.gutter,
      width: GUTTER_WIDTH,
    });

    const titleText = new TextRenderable(renderer, {
      id: `row-${rowIdx}-title`,
      content: item.title(false),
      width: "100%",
    });

    const body = Box(
      { flexDirection: "column", paddingLeft: 2, flexGrow: 1 },
      titleText,
    );

    if (item.desc) {
      body.add(
        Text({
          content: item.desc,
          fg: theme.body,
          wrapMode: "word",
          width: "100%",
        }),
      );
    }

    if (item.note) {
      body.add(Text({ content: `Note: ${item.note}`, fg: theme.note }));
    }

    if (item.chips?.length) {
      const chips: TextChunk[] = item.chips.flatMap((tech, idx) => {
        const chip = [];
        if (idx > 0) chip.push(fg(theme.muted)(" "));
        chip.push(fg(theme.muted)("["));
        chip.push(fg(theme.chip)(tech));
        chip.push(fg(theme.muted)("]"));
        return chip;
      });

      body.add(Text({ content: new StyledText(chips) }));
    }

    const row = new BoxRenderable(renderer, {
      id: `row-${rowIdx}`,
      flexDirection: "row",
      width: "100%",
    });

    row.add(gutter);
    row.add(body);

    paints.push((sel: boolean) => {
      row.opacity = sel ? 1 : 0.4;
      gutter.content = item.gutter(sel);
      titleText.content = item.title(sel);
    });

    rowItems.push(row);
    return row;
  });

  const list = new BoxRenderable(renderer, {
    id: `${heading.toLowerCase()}-list`,
  });

  list.add(
    Text({
      content: letterSpace(heading),
      fg: theme.accent,
      attributes: TextAttributes.BOLD,
    }),
  );

  list.add(
    Box({
      width: "100%",
      height: 1,
      border: ["bottom"],
      borderColor: theme.muted,
    }),
  );

  const scrollBox = new ScrollBoxRenderable(renderer, {
    id: "scroll-box",
    width: "100%",
    flexGrow: 1,
    contentOptions: { gap: 1 },
  });
  for (const row of rows) {
    scrollBox.add(row);
  }
  list.add(scrollBox);

  host?.add(list);

  const repaint = (): void => paints.forEach((p, i) => p(i === selected));
  const scrollToSelected = (): void => {
    const row = rowItems[selected];
    if (row) {
      scrollBox.scrollChildIntoView(row.id);
    }
  };
  repaint();
  scrollToSelected();

  return {
    onKey(key: KeyEvent): void {
      const n = key.name;
      if (n === "j" || n === "down") {
        if (selected < items.length - 1) {
          selected++;
          repaint();
          scrollToSelected();
          return;
        }
      }
      if (n === "k" || n === "up") {
        if (selected > 0) {
          selected--;
          repaint();
          scrollToSelected();
        }
        return;
      }
      if (n === "enter" || n === "return") {
        const item = items[selected];
        if (!item?.link) return;
        if (!renderer.isOsc52Supported()) {
          toast("clipboard not supported");
          return;
        }
        renderer.copyToClipboardOSC52(item.link);
        toast(`copied: ${item.link}`);
        return;
      }
    },
    destroy() {
      lastSelection.set(heading, selected);
      host?.remove(list.id);
      list.destroy();
    },
  };
}
