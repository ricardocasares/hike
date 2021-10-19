import slug from "slugster";
import Head from "next/head";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "@/components/Layout";
import { H1, Measure, Html } from "@/components/Typography";
import { gql } from "@/data/api";
import { ISSUE, LAST_ISSUES } from "@/data/queries";

export const Changelog: NextPage<{ issue: any; }> = ({ issue }) => (
  <Layout>
    <Head>
      <title>{issue.title} @ analogic.al</title>
    </Head>
    <Measure size={{ "@md": "md" }}>
      {issue && <H1>{issue.title}</H1>}
      {issue && (
        <Html dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></Html>
      )}
    </Measure>
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    // @ts-ignore
    issue: [num],
  } = params;

  const data = await gql({
    query: ISSUE,
    num: parseInt(num),
    repo: "analogical",
    owner: "ricardocasares",
  });

  return {
    props: {
      // @ts-ignore
      issue: data.repository.issue,
    },
    revalidate: 5
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await gql({
    num: 10,
    query: LAST_ISSUES,
    repo: "analogical",
    owner: "ricardocasares",
  });

  return {
    // @ts-ignore
    paths: data.repository.issues.edges.map(
      // @ts-ignore
      ({ node: { title, number } }) => ({
        params: { issue: [`${number}`, slug(title)] },
      })
    ),
    fallback: false,
  };
};

export default Changelog;
