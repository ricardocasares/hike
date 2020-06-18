import Link from "next/link";
import slug from "slugster";
import { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { H1, H2, Strong, Measure, P, A } from "@/components/Typography";
import { gql } from "@/data/api";
import { LAST_ISSUES as query } from "@/data/queries";

export const Changelog: NextPage<{ issues: any }> = ({ issues }) => (
  <Layout>
    <Measure>
      <H1>Changelog</H1>
      <H2>
        Notes and thoughts on <Strong>software development</Strong>
      </H2>
      {issues.map((issue: any) => (
        <P key={issue.id}>
          <Link
            href={`/changelog/[...issue]`}
            as={`/changelog/${issue.id}/${slug(issue.title)}`}
            passHref
          >
            <A>{issue.title}</A>
          </Link>
        </P>
      ))}
    </Measure>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await gql({
    num: 10,
    query,
    owner: "ricardocasares",
    repo: "analogical",
  });

  return {
    props: {
      // @ts-ignore
      issues: data.repository.issues.edges.map(
        // @ts-ignore
        ({ node: { number, title } }) => ({
          id: number,
          title,
        })
      ),
    },
  };
};

export default Changelog;
