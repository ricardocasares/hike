// external
import React from "react";
import { Activity } from "react-bytesize-icons";

// internal
import Link from "./Link";
import { themed } from "../providers/Theme";

export default themed(({ theme }) => (
  <div>
    <Link route="index">
      <Activity
        width={48}
        height={48}
        color={theme.logo}
        strokeWidth={"7%"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Link>
  </div>
));
