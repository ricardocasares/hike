import React from "react";
import { WHITE, BLACK, LIGHT_GRAY } from "../lib/colors";

export default ({ children }) => (
  <div className="box">
    {children}
    <style jsx>{`
      .box {
        border: 1px solid currentColor;
        border-radius: 3px;
        padding: 20px;
        margin-bottom: 20px;
        margin-right: 20px;
        width: 100%;
        transition: all 0.2s;
        position: relative;
      }

      .box:last-of-type {
        margin-right: 0;
      }
    `}</style>
  </div>
);
