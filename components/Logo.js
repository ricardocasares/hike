// external
import React from "react";

// internal
import { withTheme } from "../providers/Theme";

export default withTheme(({ theme, color, size }) => (
  <svg
    className="logo"
    viewBox="0 0 32 32"
    width={theme.logo.size}
    height={theme.logo.size}
    fill="none"
    stroke={theme.logo.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
  </svg>
));
