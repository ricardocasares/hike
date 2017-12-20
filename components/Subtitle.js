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
        font-size: 2.4rem;
        font-weight: 400;
      }
    `}</style>
  </h3>
));
