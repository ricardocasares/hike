import { FunctionComponent } from "react";
import { themeGet } from "styled-system";
import styled from "@app/lib/styled";
import Box from "@app/components/Box";

export const A = styled.a`
  color: ${themeGet("colors.light.0")};
  border-bottom: 2px solid ${themeGet("colors.light.5")};
  text-decoration: none;
  transition: border-color 0.5s;

  &:hover {
    border-color: ${themeGet("colors.light.2")};
  }
`;

export const P = styled.p`
  color: ${themeGet("colors.light.2")};
  line-height: 1.8em;
`;

export const Strong = styled.strong`
  color: ${themeGet("colors.light.0")};
  font-weight: 500;
`;

export const Lead: FunctionComponent<{ as?: string }> = styled.p`
  color: ${themeGet("colors.light.1")};
  font-weight: 300;
  font-size: 24px;
  line-height: 1.2em;
`;

export const Code = styled.code`
  font-family: monospace;
`;

export const Pre = styled.pre`
  color: ${themeGet("colors.light.0")};
  padding: 20px 0;
  font-size: 14px;
  font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
`;

export const Meta = styled.span`
  color: ${themeGet("colors.light.5")};
  font-size: 14px;
  line-height: 0;
`;

export const Measure: FunctionComponent = ({ children }) => (
  <Box maxWidth={["100%", "70%", "60%"]}>{children}</Box>
);
