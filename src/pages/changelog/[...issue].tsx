import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "@/components/Layout";
import { H1, H2, Measure } from "@/components/Typography";
import { gql } from "@/data/api";
import { ISSUE, LAST_ISSUES } from "@/data/queries";

export const Changelog: NextPage<{ issue: any }> = ({ issue }) => (
  <Layout>
    <Measure>
      <H1>Changelog</H1>
      {issue && <H2>{issue.title}</H2>}
      {issue && (
        <div dangerouslySetInnerHTML={{ __html: issue.bodyHTML }}></div>
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
      ({ node: { number } }) => ({ params: { issue: [number] } })
    ),
    fallback: true,
  };
};

export default Changelog;
