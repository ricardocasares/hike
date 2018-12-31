import { FunctionComponent } from "react";
import { themeGet } from "styled-system";
import styled from "@app/lib/styled";
import { P } from "./Text";

export type MarkdownProps = {
  value: string;
};

export const Paragraph: FunctionComponent<MarkdownProps> = ({ children }) => (
  <P>{children}</P>
);

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

export type CodeBlock = {
  value: string;
};

export const CodeBlock: FunctionComponent<CodeBlock> = ({ value }) => (
  <Pre>
    <Code>{value}</Code>
  </Pre>
);
