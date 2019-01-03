import styled from "@emotion/styled";
import { themeGet } from "styled-system";

export const H1 = styled.h1<{ as?: string }>`
  color: ${themeGet("colors.light.0")};
  font-weight: 300;
`;

export const H2 = H1.withComponent("h2");
export const H3 = H1.withComponent("h3");
export const H4 = H1.withComponent("h4");
export const H5 = H1.withComponent("h5");
