import styled from "@emotion/styled";
import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";

export const A = styled.a`
  color: #fff;
  text-decoration: none;
  transition: border-color 0.5s;
  padding-bottom: 2px;
  border-bottom: 2px solid #0070f3;

  &:hover {
    border-color: #666;
  }
`;

export const P = styled.p`
  color: #666;
  line-height: 1.5em;
`;

export const Strong = styled.strong`
  color: #ffffff;
  font-weight: 400;
`;

export const Lead: F = styled.p`
  color: #666;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.5em;

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

export const Html = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    transition: border-color 0.5s;
    padding-bottom: 2px;
    border-bottom: 2px solid #0070f3;

    &:hover {
      border-color: #666;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #ddd;
    font-weight: normal;
  }

  p {
    line-height: 1.5em;
  }

  p,
  li {
    color: #888;
  }

  ul {
    margin: 40px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
    list-style: none;

    &:before {
      content: "→";
      color: #333;
      margin-right: 15px;
    }
  }

  blockquote {
    margin: 30px;
    padding: 15px;
    text-decoration: none;

    p {
      color: #fff;
      font-size: 18px;
    }
  }

  pre,
  code,
  .highlight {
    color: #fff;
    font-size: 15px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  }

  pre {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #222;
    overflow: scroll;
    margin: 40px 0;
  }
`;

export const Measure: F<Box> = ({ children, ...props }) => (
  <Box maxWidth={["100%", "70%", "60%"]} {...props}>
    {children}
  </Box>
);
