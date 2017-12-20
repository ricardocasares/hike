// external
import React from "react";

export default ({ theme, children }) => (
  <h4>
    {children}
    <style jsx>{`
      h4 {
        color: black;
        margin: 0;
        font-weight: 400;
        font-size: 1.4rem;
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid ${theme.card.border};
      }
    `}</style>
  </h4>
);
