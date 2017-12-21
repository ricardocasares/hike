// external
import React from "react";

// internal
import Page from "components/Page";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import Measure from "components/Measure";
import Lead from "components/Lead";
import Chart from "components/Chart";
import Gallery from "components/Gallery";
import { Card, CardTitle } from "components/Card";
import { GitHub } from "react-bytesize-icons";
import Screen from "components/Screen";
import { PostList } from "components/Posts";
import { getIssues, getLatestRepos, getLatestPhotos } from "api";
import { dark } from "lib/themes";
import { TABLET, DESKTOP } from "lib/breakpoints";
import { ThemeProvider } from "providers/Theme";

const Index = ({ repos, issues }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Screen>
        <section>
          <Title>Hi.</Title>
          <Measure>
            <p>
              I'm Ricardo, a <strong>creative software developer</strong>.
            </p>
            <p>
              With over <strong>+10 years experience</strong> building on the
              web, I move around between the back & front-end, but also
              specialize in building UI components and single page applications.
            </p>
          </Measure>
        </section>
      </Screen>
      <Screen>
        <section>
          <Subtitle>Experience</Subtitle>
          <Measure>
            <p>
              While nowadays I focus on web development and the processes around
              it, I have my <strong>dark networking past</strong>, which allows
              me to deeply understand the web.
            </p>
          </Measure>

          <div className="grid">
            <Chart
              title="Methodologies"
              subtitle="Overall experience"
              data={[
                { label: "Kanban", value: 50 },
                { label: "Scrum", value: 40 },
                { label: "Waterfall", value: 10 }
              ]}
            />
            <Chart
              title="Technologies"
              subtitle="Daily usage"
              data={[
                { label: "Angular", value: 30 },
                { label: "React", value: 30 },
                { label: "Node.js", value: 50 },
                { label: "TypeScript", value: 50 },
                { label: "HTML", value: 30 },
                { label: "CSS", value: 30 },
                { label: "SCSS", value: 50 }
              ]}
            />
            <Chart
              title="Databases & Storage"
              subtitle="Overall experience"
              data={[
                { label: "MongoDB", value: 40 },
                { label: "MySQL", value: 50 },
                { label: "LocalStorage", value: 33 },
                { label: "LevelDB", value: 33 },
                { label: "Redis", value: 33 }
              ]}
            />
            <Chart
              title="Tools"
              subtitle="Daily usage"
              data={[
                { label: "Git", value: 60 },
                { label: "Docker", value: 20 },
                { label: "Bamboo CI", value: 20 },
                { label: "Jest", value: 20 }
              ]}
            />
          </div>
        </section>
      </Screen>
      <Screen>
        <section>
          <Subtitle>The changelog</Subtitle>
          <Measure>
            <p>Because sometimes I like to write stuff.</p>
          </Measure>
          <PostList posts={issues} />
        </section>
      </Screen>
      <Screen>
        <section>
          <Subtitle>Recent work</Subtitle>
          <Measure>
            <p>
              I spend a good part of my time writing different kinds of stuff
              while contributing to the <strong>open source</strong> software
              world. I find this world particularly fascinating.
            </p>
          </Measure>
          <div className="grid">
            {repos.map(repo => (
              <Card key={repo.id} href={repo.html_url}>
                <CardTitle>{repo.name}</CardTitle>
                {repo.description}
              </Card>
            ))}
          </div>
        </section>
      </Screen>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 30px;
          margin-top: 80px;
        }

        @media (${TABLET}) {
          .grid {
            grid-gap: 60px;
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (${DESKTOP}) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </Page>
  </ThemeProvider>
);

Index.getInitialProps = async () => {
  const repos = await getLatestRepos(4);
  const issues = await getIssues("javascript");

  return { issues, repos };
};

export default Index;
