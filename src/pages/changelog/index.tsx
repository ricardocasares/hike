import Link from "next/link";
import { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { H1, H2, Strong, Measure, A } from "@/components/Typography";
import { gql } from "@/data/api";
import { LAST_ISSUES as query } from "@/data/queries";
import { Stack } from "@/components/Stack";

export const Changelog: NextPage<{ issues: any }> = ({ issues }) => (
  <Layout>
    <Measure flex="1">
      <H1>Changelog</H1>
      <H2>
        Notes and thoughts on <Strong>software development</Strong>
      </H2>
      <Stack as="ul" m={0} p={0} space={20}>
        {issues.map((issue: any) => (
          <li key={issue.id}>
            <Link
              as={`/changelog/${issue.id}`}
              href={`/changelog/[...issue]`}
              passHref
            >
              <A>{issue.title}</A>
            </Link>
          </li>
        ))}
      </Stack>
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
