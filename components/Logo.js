// external
import React from "react";
import { Activity } from "react-bytesize-icons";

// internal
import Link from "./Link";
import { themed } from "../providers/Theme";

export default themed(({ theme, color, size }) => (
  <div>
    <Link route="index">
      <Activity
        width={theme.logo.size}
        height={theme.logo.size}
        color={theme.logo.color}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Link>
  </div>
));
