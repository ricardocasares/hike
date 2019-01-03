import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { A, P, H1, H3, Lead, Strong, Meta } from "@app/components/Typography";
import { client } from "@app/lib/github";
import { PROJECTS_QUERY } from "@app/lib/queries";
import { Card } from "@app/components/Card";
import Github from "@app/components/Icons/Github";

export type Post = {
  url: string;
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
};

export const Projects: FunctionComponent<{ projects: Post[] }> = ({
  projects
}) => (
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
          <Card>
            <H3>
              <A href={project.url}>{project.name}</A>
            </H3>
            <P>{project.description}</P>
            <Meta>
              <Github size={12} /> {project.stargazers.totalCount}
            </Meta>
          </Card>
        ))}
      </Box>
    </article>
  </Page>
);

// @ts-ignore
Projects.getInitialProps = async () => {
  const data = await client(PROJECTS_QUERY);

  return { projects: data.user.repositories.nodes };
};

export default Projects;
