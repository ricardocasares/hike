// external
import c from "open-color";

// internal
import { SANS, MONO } from "./fonts";

export const dark = {
  global: {
    time: c.gray[4],
    code: c.gray[6],
    text: c.gray[7],
    background: c.gray[0],
    anchors: c.gray[7],
    blockquote: c.gray[7],
    strong: c.gray[9]
  },
  logo: c.gray[9],
  pic: {
    background: c.gray[8],
    loading: [c.gray[8], c.gray[7]]
  },
  posts: {
    list: c.gray[2]
  },
  card: {
    title: c.gray[9],
    hover: c.gray[5],
    border: c.gray[3]
  },
  type: {
    title: c.gray[8],
    muted: c.gray[7],
    fonts: {
      sans: SANS,
      mono: MONO
    }
  },
  chart: {
    title: c.gray[9],
    subtitle: c.gray[6],
    colors: [
      c.pink[6],
      c.grape[6],
      c.violet[6],
      c.indigo[6],
      c.blue[6],
      c.cyan[6],
      c.teal[6],
      c.green[6],
      c.lime[6],
      c.yellow[6],
      c.orange[6],
      c.red[6]
    ]
  },
  loading: c.violet[6],
  codeblock: {
    color: c.gray[7],
    background: c.gray[2]
  },
  comment: {
    author: c.gray[4],
    border: c.gray[7]
  }
};

export const cyan = {
  loading: c.cyan[6],
  logo: c.cyan[6]
};

export const teal = {
  loading: c.teal[6],
  logo: c.teal[6]
};

export const orange = {
  loading: c.orange[6],
  logo: c.orange[6]
};

export const blue = {
  loading: c.blue[6],
  logo: c.blue[6]
};
