import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { A, P, H1, H3, Lead, Strong, Meta } from "@app/components/Typography";
import { repositories } from "@app/lib/github";
import { Card } from "@app/components/Card";
import Github from "@app/components/Icons/Github";
import { Repository } from "@app/lib/types";

export interface Projects {
  projects: Repository[];
}

export const Projects: FunctionComponent<Projects> = ({ projects }) => (
  <Page as="main">
    <H1>Projects</H1>
    <article>
      <header>
        <Lead as="h2">
          Code I've been <Strong>pushing</Strong> recently.
        </Lead>
      </header>

      <Box
        display="grid"
        mt="40px"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gridGap={[20]}
        maxWidth={["100%", "100%", "75%", "70%"]}
      >
        {projects.map(project => (
          <Card key={project.id}>
            <H3>
              <A href={project.html_url}>{project.name}</A>
            </H3>
            <P>{project.description}</P>
            <Meta>
              <Github size={12} /> {project.stargazers_count}
            </Meta>
          </Card>
        ))}
      </Box>
    </article>
  </Page>
);

// @ts-ignore
Projects.getInitialProps = async () => ({
  projects: await repositories({ sort: "pushed" })
});

export default Projects;
