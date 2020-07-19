import styled from "@emotion/styled";
import { As } from "@/types";
import {
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  background,
  BackgroundProps,
  border,
  BorderProps,
  compose,
  space,
  SpaceProps,
  layout,
  LayoutProps,
} from "styled-system";

export type Box = As &
  GridProps &
  FlexboxProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  SpaceProps;

export const Box = styled.div<Box>(
  compose(grid, flexbox, layout, background, border, space)
);
