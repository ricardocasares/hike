import { FunctionComponent } from "react";
import styled from "@app/lib/styled";
import Box from "@app/components/Box";

export const P = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7em;
`;

export const Strong = styled.strong`
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
`;

export const Lead = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  font-size: 24px;
  line-height: 1.2em;
`;

export const Measure: FunctionComponent = ({ children }) => (
  <Box maxWidth={["100%", "70%", "60%"]}>{children}</Box>
);
