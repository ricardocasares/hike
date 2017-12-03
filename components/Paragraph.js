// external
import React from "react";

// internal
import { themed } from "../providers/Theme";

export default themed(({ children, theme }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        color: ${theme.type.paragraph};
      }
    `}</style>
  </p>
));
