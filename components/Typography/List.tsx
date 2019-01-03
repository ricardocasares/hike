import styled from "@emotion/styled";
import { themeGet } from "styled-system";

export const Unstyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const HorizontalList = styled(Unstyled)`
  li {
    display: inline-block;
    margin-right: 10px;
  }

  li:last-child {
    margin-right: 0;
  }
`;

export const NavList = styled(HorizontalList)`
  a {
    color: ${themeGet("colors.light.2")};
    text-decoration: none;
    text-transform: lowercase;
    transition: color 1s;
    font-size: 16px;

    &:focus,
    &:hover,
    &.active {
      color: ${themeGet("colors.light.0")};
    }
  }
`;
