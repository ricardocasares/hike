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
        font-size: 1.8rem;
        line-height: 3rem;
        font-weight: 300;
      }

      :global(strong) {
        font-weight: 500;
      }
    `}</style>
  </p>
));
