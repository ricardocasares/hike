// external
import c from "open-color";

// internal
import { SANS, MONO } from "./fonts";

export const dark = {
  global: {
    color: c.gray[0],
    background: c.gray[9],
    anchors: c.gray[3]
  },
  logo: {
    size: 48,
    color: c.violet[6]
  },
  card: {
    border: c.gray[4]
  },
  type: {
    title: c.gray[0],
    subtitle: c.gray[5],
    paragraph: c.gray[6],
    muted: c.gray[7],
    fonts: {
      sans: SANS,
      mono: MONO
    }
  },
  chart: {
    title: c.gray[4],
    border: c.gray[7],
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
    color: c.gray[4],
    border: c.violet[9]
  },
  comment: {
    author: c.gray[4],
    border: c.gray[7]
  }
};

export const light = {
  global: {
    color: c.gray[0],
    background: c.white,
    anchors: c.gray[7]
  },
  logo: {
    size: 48,
    color: c.violet[6]
  },
  card: {
    border: c.gray[4]
  },
  type: {
    title: c.gray[9],
    subtitle: c.gray[7],
    paragraph: c.gray[6],
    muted: c.gray[5],
    fonts: {
      sans: SANS,
      mono: MONO
    }
  },
  chart: {
    title: c.gray[4],
    border: c.gray[7],
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
    border: c.violet[9]
  },
  comment: {
    author: c.gray[7],
    border: c.gray[3]
  }
};
