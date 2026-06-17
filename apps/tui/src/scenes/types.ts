import type { BoxRenderable, CliRenderer, KeyEvent } from "@opentui/core";
import type { Theme } from "~/theme";

export type ToastFn = (msg: string) => void;

export interface SceneController {
  onKey?(key: KeyEvent): void;
  destroy(): void;
}

export interface SceneCtx {
  renderer: CliRenderer;
  theme: Theme;
  host: BoxRenderable | null;
  toast: ToastFn;
}

export type SceneId = "about" | "experience" | "projects" | "links";

export interface SceneMeta {
  id: SceneId;
  label: string;
  key: string;
  render: (ctx: SceneCtx) => SceneController;
}
