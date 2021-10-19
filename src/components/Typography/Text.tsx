import { styled } from "@/css";

export const A = styled('a', {
  color: "$accent",
  textDecoration: "none",
});

export const P = styled('p', {
  color: "$fg",
  lineHeight: "1.5em",
});

export const Strong = styled('strong', {
  color: "$contrast !important",
  fontWeight: 500,
});

export const Lead = styled('p', {
  color: "$fg",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "1.5em",
  strong: { color: "$fg" }
});


export const Html = styled('div', {
  marginBottom: "50px",
  a: {
    color: "$accent",
    textDecoration: "none",
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "$fg",
    fontWeight: 300
  },
  p: { lineHeight: "1.5rem" },
  "p, li": { color: "$slate11" },
  ul: { margin: "40px 0", paddingLeft: "20px" },
  li: {
    marginBottom: "5px",
    listStyle: "none",
    "&:before": { content: '"-"', color: "$fg", marginRight: "15px" }
  },
  blockquote: {
    margin: "30px",
    padding: "15px",
    textDecoration: "none",
    p: { color: "$fg", fontSize: "18px" }
  },
  "pre, code, .highlight": {
    fontSize: "$2",
    fontFamily: "$mono"
  },
  pre: {
    padding: "$2",
    color: "$bg",
    background: "$contrast",
    borderRadius: "$3",
    border: "1px solid $bg",
    overflow: "scroll",
    margin: "$5 0"
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
  }
});