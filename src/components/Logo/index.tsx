import styled from "@emotion/styled";
import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";

export interface Logo {
  color?: string;
}

const Text = styled.span<Logo>`
  font-weight: 500;
  text-transform: lowercase;
  color: ${({ color = "currentcolor" }) => color};
`;

export const Logo: F<Logo> = (props) => (
  <Text {...props}>
    𝌺 <Box display={["none", "inline"]}>analogic.al</Box>
  </Text>
);
