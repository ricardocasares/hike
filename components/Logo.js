// external
import React from "react";
import { Activity } from "react-bytesize-icons";

// internal
import { themed } from "../providers/Theme";

export default themed(({ theme, color, size }) => (
  <Activity
    width={theme.logo.size}
    height={theme.logo.size}
    color={theme.logo.color}
    strokeWidth={"7%"}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
));
