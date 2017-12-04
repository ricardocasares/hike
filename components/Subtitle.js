// external
import React from "react";

// internal
import { themed } from "providers/Theme";

export default themed(({ children, theme }) => (
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
