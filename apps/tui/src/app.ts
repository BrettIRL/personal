import {
  BoxRenderable,
  CliRenderer,
  TextRenderable,
  KeyEvent,
  type ThemeMode,
  t,
  fg,
  bold,
  StyledText,
  type TextChunk,
} from "@opentui/core";
import { DEFAULT_THEME_MODE, THEMES, type Theme } from "~/theme";
import {
  SCENES,
  SCENE_KEYS,
  type SceneController,
  type SceneCtx,
  type SceneId,
} from "~/scenes";
import { basic, links } from "@personal/data";

const DEFAULT_TOAST_TIMEOUT = 1600;

export class PersonalTui {
  private renderer: CliRenderer;
  private themeMode: ThemeMode = DEFAULT_THEME_MODE;

  private statusBar: BoxRenderable | null = null;
  private statusLeft: TextRenderable | null = null;
  private statusRight: TextRenderable | null = null;
  private contentHost: BoxRenderable | null = null;
  private contentBox: BoxRenderable | null = null;
  private hintBar: BoxRenderable | null = null;
  private hintText: TextRenderable | null = null;

  private activeScene: SceneId = "about";
  private currentController: SceneController | null = null;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(renderer: CliRenderer) {
    this.renderer = renderer;
    this.themeMode = this.renderer.themeMode ?? DEFAULT_THEME_MODE;
    this.buildLayout();
    this.updateRender();
    this.renderCurrentScene();
    this.setupKeyBindings();

    this.renderer.on("theme_mode", (mode: ThemeMode) => {
      this.applyTheme(mode);
    });
    this.renderer.on("resize", () => this.onResize());
  }

  private theme(): Theme {
    return THEMES[this.themeMode];
  }

  private contentWidth(): number {
    return Math.max(24, Math.min(72, this.renderer.width - 8));
  }

  private buildLayout(): void {
    this.statusBar = new BoxRenderable(this.renderer, {
      id: "status-bar",
      width: "100%",
      height: 1,
      flexShrink: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    });
    this.statusLeft = new TextRenderable(this.renderer, {
      id: "status-left",
      content: "",
    });
    this.statusRight = new TextRenderable(this.renderer, {
      id: "status-right",
      content: "",
    });
    this.statusBar.add(this.statusLeft);
    this.statusBar.add(this.statusRight);

    this.contentHost = new BoxRenderable(this.renderer, {
      id: "content-host",
      width: "100%",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 1,
      paddingBottom: 1,
    });
    this.contentBox = new BoxRenderable(this.renderer, {
      id: "content-box",
      width: this.contentWidth(),
      height: "100%",
      flexDirection: "column",
    });
    this.contentHost.add(this.contentBox);

    this.hintBar = new BoxRenderable(this.renderer, {
      id: "hint-bar",
      width: "100%",
      height: 1,
      flexShrink: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    });
    this.hintText = new TextRenderable(this.renderer, {
      id: "hint-text",
      content: "",
    });
    this.hintBar.add(this.hintText);

    this.renderer.root.add(this.statusBar);
    this.renderer.root.add(this.contentHost);
    this.renderer.root.add(this.hintBar);
  }

  private updateRender(): void {
    const theme = this.theme();

    if (this.statusLeft) {
      this.statusLeft.content = t`${fg(theme.statusAccent)(bold(basic.name))}${fg(theme.statusFg)(` · ${basic.role}`)}`;
    }

    const meta = SCENES.find((s) => s.id === this.activeScene);
    const label = meta ? meta.label : this.activeScene;

    if (this.statusRight) {
      this.statusRight.content = t`${fg(theme.statusAccent)(label)}${fg(theme.statusFg)(` · ${this.themeMode}`)}`;
    }

    const scenes: TextChunk[] = [];
    SCENES.forEach((s, i) => {
      const active = s.id === this.activeScene;
      if (i > 0) scenes.push(fg(theme.hint)("  "));
      scenes.push(
        active
          ? fg(theme.accent)(bold(`${s.key} ${s.label}`))
          : fg(theme.hint)(`${s.key} ${s.label}`),
      );
    });
    scenes.push(fg(theme.hint)(" ·  r resume  t theme  q quit"));

    if (this.hintText) {
      this.hintText.content = new StyledText(scenes);
    }
  }

  private renderCurrentScene(): void {
    this.currentController?.destroy();
    this.currentController = null;

    const ctx: SceneCtx = {
      renderer: this.renderer,
      theme: this.theme(),
      host: this.contentBox,
      toast: (msg: string) => this.toast(msg),
    };

    const meta = SCENES.find((s) => s.id === this.activeScene);
    if (meta) this.currentController = meta.render(ctx);
  }

  private switchScene(id: SceneId): void {
    if (id === this.activeScene) return;
    this.activeScene = id;
    this.renderCurrentScene();
    this.updateRender();
  }

  private applyTheme(mode: ThemeMode) {
    this.themeMode = mode;
    this.updateRender();
    this.renderCurrentScene();
  }

  private onResize(): void {
    if (this.contentBox) {
      this.contentBox.width = this.contentWidth();
    }
  }

  private setupKeyBindings(): void {
    this.renderer.keyInput.on("keypress", (key: KeyEvent) => {
      if (key.name === "q") {
        this.renderer.destroy();
        return;
      }

      const scene = SCENE_KEYS[key.name];
      if (scene) {
        this.switchScene(scene);
        return;
      }

      if (key.name === "tab") {
        const activeSceneIndex = SCENES.findIndex(
          (s) => s.id === this.activeScene,
        );
        const nextSceneIndex = (activeSceneIndex + 1) % SCENES.length;
        const scene = SCENES[nextSceneIndex];
        if (scene) {
          this.switchScene(scene.id);
        }
        return;
      }

      if (key.name === "t") {
        this.applyTheme(this.themeMode === "dark" ? "light" : "dark");
      }

      if (key.name === "r") {
        const url = links.resume?.url;
        if (!url) return;
        if (!this.renderer.isOsc52Supported()) {
          this.toast("clipboard not supported");
          return;
        }
        this.renderer.copyToClipboardOSC52(url);
        this.toast(`copied: ${url}`);
        return;
      }

      this.currentController?.onKey?.(key);
    });
  }

  private toast(msg: string): void {
    const theme = this.theme();
    if (this.statusRight) {
      this.statusRight.content = t`${fg(theme.accent)(msg)}`;
    }

    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.toastTimer = null;
      this.updateRender();
    }, DEFAULT_TOAST_TIMEOUT);
  }

  destroy(): void {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = null;
    }
    this.currentController?.destroy();
    this.currentController = null;
  }
}
