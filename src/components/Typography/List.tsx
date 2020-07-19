import styled from "@emotion/styled";

export const UnstyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const HorizontalList = styled(UnstyledList)`
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
    color: #666;
    text-decoration: none;
    text-transform: lowercase;
    transition: color 1s;
    font-size: 16px;

    &:focus,
    &:hover,
    &.active {
      color: #ffffff;
    }
  }
`;
