// external
import React from "react";

// internal
import Page from "components/Page";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import Chart from "components/Chart";
import { dark } from "lib/themes";
import { ThemeProvider } from "providers/Theme";

const Index = () => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <section className="intro">
        <Title>Hello!</Title>

        <Subtitle>
          I'm <strong>Ricardo</strong>, a creative{" "}
          <strong>software developer</strong>.
        </Subtitle>

        <p>
          With over <strong>+10 years experience</strong> building on the web, I
          move around as a fullstack developer, but nowadays I specialize in
          building UI components.
        </p>
      </section>

      <section className="grid charts">
        <Chart
          title={"Methodologies"}
          data={[
            { label: "Kanban", value: 80 },
            { label: "Scrum", value: 50 },
            { label: "Waterfall", value: 25 }
          ]}
        />

        <Chart
          title={"Languages"}
          data={[
            { label: "JavaScript", value: 80 },
            { label: "PHP", value: 50 },
            { label: "TypeScript", value: 70 },
            { label: "HTML", value: 100 },
            { label: "CSS", value: 90 },
            { label: "SASS", value: 90 }
          ]}
        />

        <Chart
          title={"Frameworks"}
          data={[
            { label: "AngularJS", value: 80 },
            { label: "Angular", value: 50 },
            { label: "React", value: 80 },
            { label: "Hyperapp", value: 50 }
          ]}
        />

        <Chart
          title={"Tools"}
          data={[
            { label: "JIRA", value: 100 },
            { label: "Bamboo CI", value: 50 },
            { label: "Jenkins", value: 25 },
            { label: "Git", value: 80 }
          ]}
        />

        <Chart
          title={"Miscellaneous"}
          data={[
            { label: "CCNA", value: 100 },
            { label: "Cisco IOS", value: 100 },
            { label: "Mikrotik", value: 80 }
          ]}
        />

        <Chart
          title={"Work experience"}
          data={[
            { label: "Lead", value: 20 },
            { label: "Senior", value: 50 },
            { label: "Junior", value: 30 }
          ]}
        />
      </section>
    </Page>
  </ThemeProvider>
);

export default Index;
