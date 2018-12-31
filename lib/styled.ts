import styled, { CreateStyled } from "@emotion/styled";

export type Theme = {
  colors: {
    gray: string[];
  };
};

export default styled as CreateStyled<Theme>;
