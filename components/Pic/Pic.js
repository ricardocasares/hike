// external
import React from "react";

export default ({ theme, link, images, location }) => (
  <div data-location={location.name}>
    <a href={link}>
      <img src={images.low_resolution.url} />
    </a>
    <style jsx>{`
      img {
        margin: 0;
        border-radius: 3px;
      }

      div {
        position: relative;
        min-height: 100px;
        border-radius: 3px;
        background: ${theme.pic.background};
        animation: Back 1.5s ease infinite;
      }

      div::before {
        content: attr(data-location);
        font-size: 1.4rem;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 20px;
        opacity: 1;
        transition: opacity 0.2s;
        text-shadow: 1px 1px 1px #000;
        z-index: 1;
      }

      div:hover::before {
        opacity: 0;
      }

      div a {
        line-height: 0;
        display: block;
        padding: 0;
      }

      @keyframes Back {
        0% {
          background: rgba(52, 58, 64, 1);
        }
        50% {
          background: rgba(52, 58, 64, 0.5);
        }
        100% {
          background: rgba(52, 58, 64, 1);
        }
      }
    `}</style>
  </div>
);
