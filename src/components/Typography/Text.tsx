import { FunctionComponent as F } from "react";
import { styled } from "@/css";
import { Box, BoxProps } from "@/components/Box";

export const A = styled('a', {
  color: "$fg",
  borderBottom: "1px solid $accent"
});

export const P = styled('p', {
  color: "$fg",
  lineHeight: "1.5em",
});

export const Strong = styled('strong', {
  color: "$bg",
  fontWeight: 400,
});

export const Lead: F = styled('p', {
  color: "$fg",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "1.5em",
  strong: { color: "$fg" }
});


export const Html = styled('div', {
  a: {
    color: "$fg",
    textDecoration: "none",
    transition: "border-color 0.5s",
    paddingBottom: "2px",
    borderBottom: "2px solid #0070f3",
    "&:hover": { borderColor: "#666" }
  },
  "h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6": {
    color: "#ddd",
    fontWeight: "normal"
  },
  p: { lineHeight: "1.5em" },
  "p,\n  li": { color: "#888" },
  ul: { margin: "40px 0", paddingLeft: "20px" },
  li: {
    marginBottom: "5px",
    listStyle: "none",
    "&:before": { content: '"→"', color: "#333", marginRight: "15px" }
  },
  blockquote: {
    margin: "30px",
    padding: "15px",
    textDecoration: "none",
    p: { color: "#fff", fontSize: "18px" }
  },
  "pre,\n  code,\n  .highlight": {
    color: "#fff",
    fontSize: "15px",
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace"
  },
  pre: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #222",
    overflow: "scroll",
    margin: "40px 0"
  }
});

export const Measure = styled('div', {
  maxWidth: "100%",
  variants: {
    size: {
      sm: {
        maxWidth: "40%"
      },
      md: {
        maxWidth: "60%"
      },
    }
  },
  defaultVariants: {

  }
});