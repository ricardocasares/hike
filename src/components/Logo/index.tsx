import { FunctionComponent as F } from "react";
import { styled } from "@/css";
import { Box } from "@/components/Box";

export interface Logo {
  color?: string;
}

const Text = styled('span', {
  "fontWeight": 500,
  "textTransform": "lowercase",
  color: "$fg"
});

export const Logo: F<Logo> = (props) => (
  <Text {...props}>
    𝌺 <Box css={{ display: "none", md: { display: "inline" } }}>analogic.al</Box>
  </Text>
);
