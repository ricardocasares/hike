// external
import React from "react";

export default ({ children }) => (
  <h2>
    {children}
    <style jsx>{`
      h2 {
        font-size: 200%;
        font-weight: 300;
      }
    `}</style>
  </h2>
);
