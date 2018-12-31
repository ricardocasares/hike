import { FunctionComponent } from "react";
import styled from "@app/lib/styled";
import Box from "@app/components/Box";

export interface Logo {
  color?: string;
}

const Text = styled.span<Logo>`
  font-weight: 500;
  text-transform: lowercase;
  color: ${({ color = "currentcolor" }) => color};
`;

export const Logo: FunctionComponent<Logo> = props => (
  <Text {...props}>
    <strong>⨳</strong> <Box display={["none", "inline"]}>analogical</Box>
  </Text>
);

export default Logo;