import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100%",
  gap: "$2",

  variants: {
    pad: {
      sm: {
        padding: "$2",
      },
      md: {
        padding: "$4",
      },
    },
  },
});
