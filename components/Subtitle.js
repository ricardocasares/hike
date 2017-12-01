// external
import React from "react";

// internal
import { withTheme } from "../providers/Theme";

export default withTheme(({ children, theme }) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        color: ${theme.type.subtitle};
        font-size: 1.8rem;
        font-weight: 400;
      }
    `}</style>
  </h3>
));
