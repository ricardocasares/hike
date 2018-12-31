import styled, { CreateStyled } from "@emotion/styled";

export type ITheme = {
  colors: {
    dark: string[];
    light: string[];
  };
};

export default styled as CreateStyled<ITheme>;
