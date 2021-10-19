import { createStitches } from "@stitches/react";
import { utils } from "@/css/utils";
import { sizes } from "@/css/sizes";
import { fonts } from "@/css/fonts";
import { colors } from "@/css/colors";

export const { css, styled, getCssText, globalCss, createTheme } =
  createStitches({
    utils,
    theme: {
      fonts,
      colors,
      ...sizes,
    },
    media: {
      sm: "(max-width: 640px)",
      md: "(min-width: 640px)",
      lg: "(min-width: 768px)",
      xl: "(min-width: 1024px)",
    },
  });
