import styled from "@app/lib/styled";
import { themeGet } from "styled-system";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid ${themeGet("colors.light.5")};
  transition: border-color 1s;

  a {
    transition: color 1s;
    color: ${themeGet("colors.light.2")};
  }

  h3 {
    margin: 0;
    font-size: 16px;
  }

  p {
    flex: 1;
    font-size: 14px;
    transition: color 1s;
    color: ${themeGet("colors.light.4")};
  }

  &:hover {
    border-color: ${themeGet("colors.light.1")};
    a {
      color: ${themeGet("colors.light.1")};
    }

    p {
      color: ${themeGet("colors.light.2")};
    }
  }
`;
