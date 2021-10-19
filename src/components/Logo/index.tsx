import { FunctionComponent as F } from "react";
import { styled } from "@/css";
import { Box } from "@/components/Box";
import { Strong } from "@/components/Typography";

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
    ⨳ <Box css={{ display: "none", "@md": { display: "inline" } }}><Strong>analogic.al</Strong></Box>
  </Text>
);
