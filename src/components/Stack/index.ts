import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100%",

  "> *": {
    marginTop: "0",
    marginBottom: "0",
  },
  "> * + *": {
    marginTop: "$2",
  },
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
