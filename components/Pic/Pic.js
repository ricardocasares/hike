// external
import React from "react";

export default ({ theme, link, images, location }) => (
  <div className="pic" style={{ animation: "Back 1.5s ease infinite" }}>
    <a href={images.standard_resolution.url}>
      <img src={images.low_resolution.url} />
    </a>
    <div className="location">{location.name}</div>
    <style jsx>{`
      img {
        margin: 0;
        border-radius: 3px;
      }

      .pic {
        position: relative;
        border-radius: 3px;
        background: ${theme.pic.background};
        animation: Back 1.5s ease infinite;
        min-height: 150px;
      }

      .pic:hover .location {
        opacity: 0;
      }

      .location {
        font-size: 1.4rem;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 1;
        padding: 10px;
        transition: opacity 0.2s;
        text-shadow: 1px 1px 1px #000;
      }

      .pic a {
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
