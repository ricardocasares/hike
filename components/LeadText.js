// external
import React from "react";

export default ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 120%;
      }
    `}</style>
  </p>
);
