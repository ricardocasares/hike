import { globalCss } from "@/css";

export const reset = globalCss({
  "html,\n  body,\n  #__next": {
    margin: "0",
    padding: "0",
    height: "100%",
    background: "#000",
  },
  "*,\n  *::after,\n  *::before": { boxSizing: "border-box" },
  body: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,\n      sans-serif, Apple Color Emoji, Segoe UI Emoji",
  },
});
