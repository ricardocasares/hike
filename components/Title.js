// external
import React from "react";

// internal
import { themed } from "providers/Theme";

export default themed(({ children, theme }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        color: ${theme.type.title};
        font-size: 3rem;
        font-weight: 500;
      }
    `}</style>
  </h1>
));
