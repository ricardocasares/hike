// external
import React from "react";

// internal
import Link from "../Link";
import Time from "../Time";
import { slug } from "lib/util";

export default ({ theme, posts }) => (
  <section className="postList">
    {posts.map(({ title, number, created_at }) => {
      return (
        <h3 key={number}>
          <Link prefetch route={`/changelog/${number}/${slug(title)}`}>
            {title}
          </Link>
          <Time date={new Date(created_at)} />
        </h3>
      );
    })}
    <style jsx>{`
      h3 {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
        padding: 10px 0;
      }

      h3:last-child {
        border: 0;
      }

      .postList :global(a) {
        color: $theme.post.list;
        font-weight: normal;
      }
    `}</style>
  </section>
);
