import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  "> *:not(style) ~ *:not(style)": {
    marginTop: "var(--stack-top)",
  },
  variants: {
    space: {
      sm: {
        "--stack-top": "10px",
      },
      md: {
        "--stack-top": "20px",
      },
    },
  },
  defaultVariants: {
    space: "md",
  },
});
