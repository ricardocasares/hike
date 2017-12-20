import React from "react";

export default ({ width = 34, children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        max-width: ${width}em;
      }
    `}</style>
  </div>
);
