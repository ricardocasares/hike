// external
import React from "react";

// internal
import Page from "../components/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Pic from "../components/Pic";
import { Card, CardTitle } from "../components/Card";
import { TABLET, DESKTOP } from "../lib/breakpoints";
import { getLatestPhotos } from "../lib/api";
import { light, dark } from "../lib/themes";
import { ThemeProvider } from "../providers/Theme";

const Index = ({ pics }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Title>Photos</Title>
      <Subtitle>Latest pics posted on Instagram</Subtitle>
      <section className="grid pics">
        {pics.map(pic => <Pic key={pic.id} {...pic} />)}
      </section>

      <style jsx>{`
        @media (${TABLET}) {
          .pics {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (${DESKTOP}) {
          .pics {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </Page>
  </ThemeProvider>
);

Index.getInitialProps = async () => {
  const pics = await getLatestPhotos();

  return { pics };
};

export default Index;
