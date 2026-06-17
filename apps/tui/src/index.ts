import { createCliRenderer } from "@opentui/core";
import { PersonalTui } from "./app";

let tui: PersonalTui | undefined;
const renderer = await createCliRenderer({
  exitOnCtrlC: true,
  targetFps: 60,
  onDestroy: () => tui?.destroy(),
});

tui = new PersonalTui(renderer);
