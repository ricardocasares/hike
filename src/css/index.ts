import { createStitches } from "@stitches/react";
import { slate, slateDark, indigo, indigoDark } from "@radix-ui/colors";

export const { css, styled, getCssText, globalCss, createTheme } =
  createStitches({
    theme: {
      colors: {
        ...slate,
        ...indigo,

        fg: "$slate1",
        bg: "$slate12",
        accent: "$indigo9",
      },
    },
    media: {
      sm: "(max-width: 640px)",
      md: "(min-width: 640px)",
      lg: "(min-width: 768px)",
      xl: "(min-width: 1024px)",
    },
  });

export const darkTheme = createTheme({
  colors: {
    ...slateDark,
    ...indigoDark,
  },
});
