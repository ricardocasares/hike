// external
import ago from "s-ago";
import React from "react";

export default ({ theme, date }) => (
  <time title={date.toString()}>
    {ago(date)}
    <style jsx>{`
      time {
        color: ${theme.global.time};
        font-weight: 300;
      }
    `}</style>
  </time>
);
