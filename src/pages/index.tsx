import { FunctionComponent as F } from "react";
import { Layout } from "@/components/Layout";
import { H1, P, Lead, Strong, Measure } from "@/components/Typography";

export const Index: F = () => (
  <Layout>
    <Measure css={{ flex: "1" }}>
      <H1>Hi</H1>
      <Lead>
        I'm Ricardo, a <Strong>creative software developer</Strong>.
      </Lead>
      <P>
        With over <Strong>+10 years experience</Strong> building on the web, I
        move around between the back and the frontend, but specialize in
        building UI components and single page applications.
      </P>
    </Measure>
  </Layout>
);

export default Index;
