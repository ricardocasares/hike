// external
import ago from "s-ago";
import React from "react";

// internal
import Link from "./Link";
import { slug } from "../lib/util";

export default ({ posts }) => (
  <section>
    {posts.map(({ title, number, created_at }) => {
      const date = new Date(created_at);
      const relative = ago(date);

      return (
        <h3 key={number}>
          <Link prefetch route={`/changelog/${number}/${slug(title)}`}>
            {title}
          </Link>
          <time title={date.toString()}>{relative}</time>
        </h3>
      );
    })}
    <style jsx>{`
      h3 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      time {
        margin-left: 10px;
      }
    `}</style>
  </section>
);
