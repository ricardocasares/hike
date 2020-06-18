import styled from "@emotion/styled";
import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";

export const A = styled.a`
  color: #ffffff;
  border-bottom: 2px solid #cccccc;
  text-decoration: none;
  transition: border-color 0.5s;

  &:hover {
    border-color: #eeeeee;
  }
`;

export const P = styled.p`
  color: #666;
  line-height: 1.8em;
`;

export const Strong = styled.strong`
  color: #ffffff;
  font-weight: 400;
`;

export const Lead: F = styled.p`
  color: #666;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.2em;

  strong {
    color: #ffffff;
  }
`;

export const Code = styled.code`
  font-family: monospace;
`;

export const Pre = styled.pre`
  color: #ffffff;
  padding: 20px 0;
  font-size: 14px;
  font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
`;

export const Meta = styled.span`
  color: #cccccc;
  font-size: 14px;
  line-height: 0;
`;

export const Measure: F<Box> = ({ children, ...props }) => (
  <Box maxWidth={["100%", "70%", "60%"]} {...props}>
    {children}
  </Box>
);
