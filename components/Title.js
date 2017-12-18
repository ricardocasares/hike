// external
import React from "react";

// internal
import { themed } from "providers/Theme";

export default themed(({ children, theme }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        font-size: 4.2rem;
        font-weight: 600;
        color: ${theme.type.title};
      }
    `}</style>
  </h2>
));
