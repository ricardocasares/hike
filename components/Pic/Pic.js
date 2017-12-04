// external
import React from "react";

export default ({ theme, link, images, location }) => (
  <div className="pic">
    <a href={images.standard_resolution.url}>
      <img src={images.low_resolution.url} />
    </a>
    <div className="location">{location.name}</div>
    <style jsx>{`
      img {
        margin: 0;
        border-radius: 3px;
        display: block;
        min-width: 100px;
      }

      .pic {
        position: relative;
        border-radius: 3px;
        background: ${theme.pic.background};
        animation: Back 1s ease infinite;
        min-height: 100px;
      }

      .pic:hover .location {
        opacity: 1;
      }

      .location {
        font-size: 1.4rem;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        padding: 10px;
        transition: opacity 0.2s;
        text-shadow: 1px 1px 1px #000;
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
