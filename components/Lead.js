// external
import React from "react";

// internal
import { themed } from "providers/Theme";

export default themed(({ children, theme }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        color: ${theme.type.lead};
        font-size: 2.5rem;
        line-height: 3.5rem;
        font-weight: 400;
      }
    `}</style>
  </p>
));
