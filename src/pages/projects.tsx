import { NextPage, GetStaticProps } from "next";

import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";
import { H1, Strong, Measure, Lead } from "@/components/Typography";
import { gql } from "@/data/api";
import { LAST_REPOSITORIES as query } from "@/data/queries";
import { Box } from "@/components/Box";

export const Projects: NextPage<{ repos: any }> = ({ repos }) => (
  <Layout>
    <Measure flex="1" as="section">
      <H1>Projects</H1>
      <Lead>
        Code I've been <Strong>pushing</Strong> lately
      </Lead>

      <Box
        as="div"
        display="grid"
        gridGap={15}
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
      >
        {repos.map((repo: any) => (
          <Card key={repo.id} {...repo} />
        ))}
      </Box>
    </Measure>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await gql({
    query,
  });

  return {
    props: {
      // @ts-ignore
      repos: data.viewer.repositories.nodes.map(
        // @ts-ignore
        ({ id, url, name, description, stargazers }) => ({
          id,
          url,
          name,
          description,
        })
      ),
    },
  };
};

export default Projects;
