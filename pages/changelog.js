// external
import React from "react";

// external
import Page from "components/Page";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import { PostList } from "components/Posts";
import Link from "components/Link";
import { dark, teal } from "lib/themes";
import { getIssues, getLabels } from "api";
import { DESKTOP } from "lib/breakpoints";
import { ThemeProvider } from "providers/Theme";

const Changelog = ({ labels, issues }) => (
  <ThemeProvider theme={{ ...dark, ...teal }}>
    <Page title="analogic.al">
      <Title>Changelog entries</Title>
      <Subtitle>Because sometimes I like to write stuff</Subtitle>
      <section className="posts">
        <PostList posts={issues} />
        <ul>
          <h4>Tags</h4>
          {labels.map((l, idx) => (
            <li key={idx}>
              <Link route={`/changelog?tag=${l.name}`}>{l.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        .posts {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 0;
          margin: 30px 0;
        }

        ul {
          list-style: none;
          margin: 0;
          margin-top: 30px;
          padding: 0;
        }

        @media (${DESKTOP}) {
          .posts {
            grid-template-columns: 4fr 1fr;
          }

          ul {
            justify-self: right;
            margin-top: 0;
          }
        }

        li {
          margin-bottom: 10px;
        }

        li:first-letter {
          text-transform: uppercase;
        }

        h4 {
          font-weight: normal;
          margin-top: 0;
        }
      `}</style>
    </Page>
  </ThemeProvider>
);

Changelog.getInitialProps = async ({ query }) => {
  const { tag } = query;
  const labels = await getLabels();
  const issues = await getIssues(tag);

  return { labels, issues };
};

export default Changelog;
