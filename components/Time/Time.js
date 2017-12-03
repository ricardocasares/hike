// external
import ago from "s-ago";
import React from "react";

export default ({ theme, date }) => (
  <time title={date.toString()}>
    {ago(date)}
    <style jsx>{`
      time {
        color: ${theme.global.time};
        margin-left: 5px;
      }
    `}</style>
  </time>
);
