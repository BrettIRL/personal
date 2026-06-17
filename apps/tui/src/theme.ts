import { type ThemeMode } from "@opentui/core";

export interface Theme {
  heading: string;
  body: string;
  muted: string;
  gutter: string;
  accent: string;
  link: string;
  chip: string;
  note: string;
  statusFg: string;
  statusAccent: string;
  hint: string;
  modalBorder: string;
}

export const THEMES: Record<ThemeMode, Theme> = {
  dark: {
    heading: "#e2e8f0",
    body: "#cbd5e1",
    muted: "#94a3b8",
    gutter: "#64748b",
    accent: "#00bcff",
    link: "#7dd3fc",
    chip: "#38bdf8",
    note: "#fbbf24",
    statusFg: "#94a3b8",
    statusAccent: "#00bcff",
    hint: "#64748b",
    modalBorder: "#00bcff",
  },
  light: {
    heading: "#0f172a",
    body: "#334155",
    muted: "#64748b",
    gutter: "#94a3b8",
    accent: "#0284c7",
    link: "#0ea5e9",
    chip: "#0369a1",
    note: "#d97706",
    statusFg: "#64748b",
    statusAccent: "#0ea5e9",
    hint: "#94a3b8",
    modalBorder: "#0ea5e9",
  },
};

export const DEFAULT_THEME_MODE: ThemeMode = "dark";
