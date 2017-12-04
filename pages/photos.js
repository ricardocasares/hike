// external
import React from "react";

// internal
import Page from "components/Page";
import Title from "components/Title";
import Subtitle from "components/Subtitle";
import Pic from "components/Pic";
import { Card, CardTitle } from "components/Card";
import { TABLET, DESKTOP } from "lib/breakpoints";
import { getLatestPhotos } from "api";
import { dark, blue } from "lib/themes";
import { ThemeProvider } from "providers/Theme";

const Photos = ({ pics }) => (
  <ThemeProvider theme={{ ...dark, ...blue }}>
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

Photos.getInitialProps = async () => {
  const pics = await getLatestPhotos();

  return { pics };
};

export default Photos;
