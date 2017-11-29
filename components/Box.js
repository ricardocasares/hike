import React from "react";
import { WHITE, BLACK, LIGHT_GRAY } from "../lib/colors";

export default ({ children }) => (
  <div className="box">
    {children}
    <style jsx>{`
      .box {
        border: 1px solid ${LIGHT_GRAY};
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

      .box:hover {
        transform: translateY(-9px);
        box-shadow: 0 2px ${WHITE}, 0 3px ${LIGHT_GRAY}, 0 5px ${WHITE},
          0 6px ${LIGHT_GRAY}, 0 8px ${WHITE}, 0 9px ${LIGHT_GRAY};
      }
    `}</style>
  </div>
);
