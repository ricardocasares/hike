import { FunctionComponent, ImgHTMLAttributes } from "react";
import Markdown from "react-markdown";
import { themeGet } from "styled-system";
import styled from "@app/lib/styled";
import HorizontalScroller from "@app/components/Scroller";
import { A, P } from "./Text";
import { H1 } from "./Headings";
import { Img } from "./Image";
import { Unstyled } from "./List";

type MarkdownProps = {
  value: string;
};

const Paragraph: FunctionComponent<MarkdownProps> = ({ children }) => (
  <P>{children}</P>
);

const Anchor: FunctionComponent = ({ children, ...props }) => (
  <A {...props}>{children}</A>
);

const Code = styled.code`
  font-family: monospace;
`;

const Pre = styled.pre`
  color: ${themeGet("colors.light.0")};
  padding: 20px 0;
  font-size: 14px;
  font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
`;

const CodeBlock: FunctionComponent<MarkdownProps> = ({ value }) => (
  <HorizontalScroller>
    <Pre>
      <Code>{value}</Code>
    </Pre>
  </HorizontalScroller>
);

const StyledUl = styled.ul`
  padding: 0;
  margin-left: 25px;
`;

const StyledLi = styled.li`
  color: ${themeGet("colors.light.2")};
  list-style: none;
  margin-bottom: 5px;
  line-height: 1.5em;

  &::before {
    content: "-";
    margin-right: 10px;
    color: ${themeGet("colors.light.4")};
  }
`;

const Ul: FunctionComponent = ({ children }) => <StyledUl>{children}</StyledUl>;
const Li: FunctionComponent = ({ children }) => <StyledLi>{children}</StyledLi>;

const Heading: FunctionComponent<{ level: string }> = ({ level, children }) => (
  <H1 as={`h${level}`}>{children}</H1>
);

const Image: FunctionComponent<ImgHTMLAttributes<Element>> = props => (
  <Img {...props} />
);

export const Md: FunctionComponent<{ body: string }> = ({ body }) => (
  <Markdown
    source={body}
    renderers={{
      paragraph: Paragraph,
      code: CodeBlock,
      link: Anchor,
      list: Ul,
      image: Image,
      heading: Heading,
      listItem: Li
    }}
  />
);
