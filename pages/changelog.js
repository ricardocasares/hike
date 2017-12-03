// external
import React from "react";

// external
import Page from "../components/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Posts from "../components/Posts";
import Link from "../components/Link";
import { dark } from "../lib/themes";
import { getIssues, getLabels } from "../lib/api";
import { ThemeProvider } from "../providers/Theme";

const Changelog = ({ labels, issues }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Title>Changelog entries</Title>
      <Subtitle>Because sometimes I like to write stuff</Subtitle>
      <section className="grid">
        <Posts posts={issues} />
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
        .grid {
          grid-template-columns: 1fr;
          grid-gap: 0;
        }

        @media (min-width: 700px) {
          .grid {
            grid-template-columns: 4fr 1fr;
          }

          ul {
            justify-self: right;
          }
        }

        section {
          margin-bottom: 30px;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        h4 {
          font-weight: normal;
        }

        li:first-letter {
          text-transform: uppercase;
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
