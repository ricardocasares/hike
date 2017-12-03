// external
import React from "react";

// internal
import Page from "../components/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import { Card, CardTitle } from "../components/Card";
import P from "../components/Paragraph";
import { getLatestRepos } from "../lib/api";
import { light, dark } from "../lib/themes";
import { ThemeProvider } from "../providers/Theme";

const Index = ({ repos }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Title>Work</Title>
      <Subtitle>Things I've been recently working on</Subtitle>
      <section className="grid recent">
        {repos.map(repo => (
          <Card key={repo.id}>
            <CardTitle>
              <a href={repo.html_url}>{repo.name}</a>
            </CardTitle>
            <P>{repo.description}</P>
          </Card>
        ))}
      </section>

      <style jsx>{`
        .recent {
          margin-bottom: 30px;
        }

        .recent {
          grid-template-columns: 1fr;
        }

        @media (min-width: 600px) {
          .recent {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .recent {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </Page>
  </ThemeProvider>
);

Index.getInitialProps = async () => {
  const repos = await getLatestRepos();

  return { repos };
};

export default Index;
