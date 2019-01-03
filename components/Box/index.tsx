import styled from "@app/lib/styled";
import {
  alignItems,
  AlignItemsProps,
  border,
  BorderProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
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
  flexWrap,
  FlexWrapProps,
  gridGap,
  GridGapProps,
  gridTemplateColumns,
  GridTemplatesColumnsProps,
  gridTemplateRows,
  GridTemplatesRowsProps,
  position,
  PositionProps
} from "styled-system";

export type Box = AlignItemsProps &
  BorderProps &
  BorderColorProps &
  BorderRadiusProps &
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
  FlexWrapProps &
  GridGapProps &
  GridTemplatesColumnsProps &
  GridTemplatesRowsProps &
  PositionProps & {
    as?: string;
  };

// @ts-ignore
export const Box = styled.div<Box>`
  ${alignItems}
  ${border}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${gridGap}
  ${gridTemplateColumns}
  ${gridTemplateRows}
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
