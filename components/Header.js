// external
import React from "react";

// internal
import Logo from "./Logo";
import Navigation from "./Navigation";
import { MOBILE } from "../lib/breakpoints";

export default () => (
  <header>
    <Logo />
    <Navigation />
    <style jsx>{`
      header {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-items: center;
        margin-bottom: 30px;
      }

      @media (${MOBILE}) {
        header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: stretch;
        }
      }
    `}</style>
  </header>
);
