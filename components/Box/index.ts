import styled from "@app/lib/styled";
import {
  alignItems,
  AlignItemsProps,
  borders,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  maxHeight,
  MaxHeightProps,
  minHeight,
  MinHeightProps,
  maxWidth,
  MaxWidthProps,
  minWidth,
  MinWidthProps,
  ratio,
  RatioProps,
  space,
  SpaceProps,
  size,
  SizeProps,
  flex,
  FlexProps,
  flexDirection,
  FlexDirectionProps,
  position,
  PositionProps
} from "styled-system";

export type Box = AlignItemsProps &
  BorderProps &
  BoxShadowProps &
  ColorProps &
  DisplayProps &
  MaxHeightProps &
  MinHeightProps &
  MaxWidthProps &
  MinWidthProps &
  RatioProps &
  SpaceProps &
  SizeProps &
  FlexProps &
  FlexDirectionProps &
  PositionProps;

// @ts-ignore
export const Box = styled.div<Box>`
  ${alignItems}
  ${borders}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${maxHeight}
  ${minHeight}
  ${maxWidth}
  ${minWidth}
  ${ratio}
  ${size}
  ${space}
  ${position}
`;

export default Box;
