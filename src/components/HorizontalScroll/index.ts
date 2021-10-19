import { styled } from "@/css";

export const HorizontalScroll = styled("div", {
  overflowX: "scroll",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  WebkitOverflowScrolling: "touch",
  "::-webkit-scrollbar": { display: "none" },
});
