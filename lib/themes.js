import c from "colors.css";
import shader from "shader";

export const dark = {
  color: c.gray,
  muted: c.silver,
  subtle: c.gray,
  background: c.black,
  anchors: c.white,
  loading: c.fuchsia,
  codeblock: c.gray
};

export const light = {
  color: c.black,
  muted: c.silver,
  subtle: c.gray,
  background: c.white,
  anchors: c.blue,
  loading: c.blue,
  codeblock: c.blue
};

export const red = {
  color: shader(c.red, -0.5),
  subtle: shader(c.red, -0.5),
  muted: shader(c.red, 0.5),
  background: c.red,
  anchors: c.white,
  loading: c.white,
  codeblock: shader(c.red, -0.5)
};
