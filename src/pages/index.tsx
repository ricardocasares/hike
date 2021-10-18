import { FunctionComponent as F } from "react";
import { Layout } from "@/components/Layout";
import { H1, P, Lead, Strong, Measure } from "@/components/Typography";

export const Index: F = () => (
  <Layout>
    <Measure size={{ "@md": "md" }}>
      <H1>Hello!</H1>
      <Lead as="h2">
        I'm <Strong>Ricardo</Strong>, a creative software developer.
      </Lead>
      <P>
        As an experienced web developer, I
        move around between the back and the frontend, and specialize in
        building UI components and single page applications.
      </P>
    </Measure>
  </Layout>
);

export default Index;
