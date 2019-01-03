import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Page from "@app/components/Page";
import { H1, P, Lead, Strong, Measure } from "@app/components/Typography";

export const Index: FunctionComponent = () => (
  <Page>
    <Box as="main" display="flex" flex="1" alignItems="center">
      <Measure>
        <H1>Hi</H1>

        <Lead>
          I'm Ricardo, a <Strong>creative software developer</Strong>.
        </Lead>
        <P>
          With over <Strong>+10 years experience</Strong> building on the web, I
          move around between the back & front-end, but also specialize in
          building UI components and single page applications.
        </P>
      </Measure>
    </Box>
  </Page>
);

export default Index;
