// external
import React from "react";

// internal
import Page from "../components/Page";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Pic from "../components/Pic";
import { Card, CardTitle } from "../components/Card";
import P from "../components/Paragraph";
import { getLatestPhotos } from "../lib/api";
import { light, dark } from "../lib/themes";
import { ThemeProvider } from "../providers/Theme";

const Index = ({ pics }) => (
  <ThemeProvider theme={dark}>
    <Page title="analogic.al">
      <Title>Photos</Title>
      <Subtitle>Travel & pics</Subtitle>
      <section className="grid recent">
        {pics.map(pic => <Pic key={pic.id} {...pic} />)}
      </section>

      <style jsx>{`
        img {
          margin: 0;
          border-radius: 3px;
        }

        .pic {
          position: relative;
        }

        .pic::before {
          content: attr(data-location);
          color: white;
          position: absolute;
          bottom: 10px;
          left: 10px;
          opacity: 0;
          transition: opacity 0.2s;
          text-shadow: 1px 1px 1px #000;
        }

        .pic:hover::before {
          opacity: 1;
        }

        .pic a {
          line-height: 0;
        }

        .recent {
          margin-bottom: 30px;
        }

        .recent {
          grid-template-columns: 1fr;
          grid-gap: 20px;
        }

        @media (min-width: 600px) {
          .recent {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 30px;
          }
        }

        @media (min-width: 1024px) {
          .recent {
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
