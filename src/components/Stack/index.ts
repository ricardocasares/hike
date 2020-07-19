import styled from "@emotion/styled";
import { system } from "styled-system";
import { Box } from "@/components/Box";

const space = system({
  space: {
    property: "marginTop",
  },
});

export type Stack = Box & { space?: number | number[] };

export const Stack = styled(Box)<Stack>`
  > *:not(style) ~ *:not(style) {
    ${space}
  }
`;
