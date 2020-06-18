import styled from "@emotion/styled";
import { As } from "@/types";
import {
  flexbox,
  FlexboxProps,
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
  FlexboxProps &
  LayoutProps &
  BackgroundProps &
  BorderProps &
  SpaceProps;

export const Box = styled.div<Box>(
  compose(flexbox, layout, background, border, space)
);
