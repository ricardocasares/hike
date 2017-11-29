// external
import React from "react";

// internal
import Link from "../components/Link";
import Layout from "../components/Layout";
import Title from "../components/Title";
import LeadText from "../components/LeadText";
import Box from "../components/Box";
import Posts from "../components/Posts";

const Page = props => (
  <Layout title="analogic.al">
    <Title>Hello!</Title>
    <LeadText>
      I'm <strong>Ricardo</strong> a creative{" "}
      <strong>software developer</strong> with{" "}
      <strong>+10 years experience</strong> building on the web.
    </LeadText>
    <Title>Experience</Title>
    <section>
      <Box>EPAM</Box>
      <Box>Globant</Box>
      <Box>BHP Global</Box>
    </section>
    <style jsx>{`
      @media (min-width: 700px) {
        section {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </Layout>
);

export default Page;
