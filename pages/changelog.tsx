import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, H2, Lead, Strong } from "@app/components/Typography";
import Link from "@app/components/Link";

export const Changelog: FunctionComponent = () => (
  <Page>
    <Box display="flex" flex="1">
      <main>
        <H1>The changelog </H1>
        <Lead>
          Notes and thoughts on <Strong>software development</Strong>.
        </Lead>
        $
        {[
          "Scrum cheat sheet",
          "Mocking is a code smell",
          "What is recursion anyway",
          "Function composition",
          "About transducers",
          "Kanban cheat sheet",
          "How the web works",
          "Scrum cheat sheet",
          "Mocking is a code smell",
          "What is recursion anyway",
          "Function composition",
          "About transducers",
          "Kanban cheat sheet",
          "How the web works"
        ].map(post => (
          <H2>
            <Link href="/">
              <a>{post}</a>
            </Link>
          </H2>
        ))}
      </main>
    </Box>
  </Page>
);

export default Changelog;
