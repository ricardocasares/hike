// external
import React from "react";

// internal
import Link from "../Link";
import Time from "../Time";
import { slug } from "../../lib/util";

export default ({ theme, posts }) => (
  <section>
    {posts.map(({ title, number, created_at }) => {
      return (
        <h3 key={number}>
          <Link prefetch route={`/changelog/${number}/${slug(title)}`}>
            {title}
            <Time date={new Date(created_at)} />
          </Link>
        </h3>
      );
    })}
    <style jsx>{`
      h3 {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        padding: 15px 0;
        border-bottom: 1px solid ${theme.posts.list};
      }

      h3:last-child {
        border: 0;
      }
    `}</style>
  </section>
);
