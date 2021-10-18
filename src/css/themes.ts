import { createTheme } from "@/css";
import { slateDark, indigoDark } from "@radix-ui/colors";

export const dark = createTheme({
  colors: {
    ...slateDark,
    ...indigoDark,
  },
});
