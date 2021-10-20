import { globalCss } from "@/css";

export const reset = globalCss({
  "html, body, #__next": {
    margin: "0",
    padding: "0",
    height: "100%",
  },
  "*, *::after, *::before": {
    boxSizing: "border-box",
  },
  body: {
    color: "$fg",
    background: "$bg",
    fontFamily: "$sans",
    fontSize: "$4",
    lineHeight: "1.5rem",
  },
});
