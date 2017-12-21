// external
import React from "react";

export default ({ theme, href, children }) => (
  <a href={href}>
    {children}
    <style jsx>{`
      a {
        color: ${theme.global.text};
        padding: 2rem;
        border-radius: 0.3rem;
        border: 0.1rem solid ${theme.card.border};
        display: block;
        transition: border-color 0.3s;
        font-size: 1.4rem;
        font-weight: 300;
        background: ${theme.card.background};
      }

      a:hover {
        border-color: ${theme.card.hover};
      }
    `}</style>
  </a>
);
