import React from "react";
import { TABLET } from "../lib/breakpoints";

export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        padding: 30px;
        display: flex;
        align-items: center;
        min-height: 100vh;
      }

      @media (${TABLET}) {
        div {
          padding: 0 90px;
        }
      }
    `}</style>
  </div>
);
