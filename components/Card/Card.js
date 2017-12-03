// external
import React from "react";

// internal
import { themed } from "../../providers/Theme";

export default themed(({ theme, children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        padding: 2rem;
        border: 0.1rem solid ${theme.card.border};
        border-radius: 0.3rem;
        width: 100%;
        transition: border-color 0.2s;
      }

      div:hover {
        border-color: ${theme.card.hover};
      }
    `}</style>
  </div>
));
