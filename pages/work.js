// external
import React from "react";
import { GitHub } from "react-bytesize-icons";

// internal
import Page from "components/Page";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import { Card, CardTitle } from "components/Card";
import { getLatestRepos } from "lib/api";
import { dark, cyan } from "lib/themes";
import { ThemeProvider } from "providers/Theme";

const Index = ({ repos }) => (
  <ThemeProvider theme={{ ...dark, ...cyan }}>
    <Page title="analogic.al">
      <Title>Work</Title>
      <Subtitle>Things I've been recently working on</Subtitle>
      <section className="grid">
        {repos.map(repo => (
          <Card key={repo.id}>
            <CardTitle>
              <a href={repo.html_url}>
                <GitHub width={15} height={15} />
                <span>{repo.name}</span>
              </a>
            </CardTitle>
            <p>{repo.description}</p>
          </Card>
        ))}
      </section>

      <style jsx>{`
        a {
          display: grid;
          grid-template-columns: 20px 1fr;
          align-items: center;
          justify-items: left;
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
