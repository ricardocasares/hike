export default ({ link, images, location }) => (
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
      }

      div::before {
        content: attr(data-location);
        color: white;
        position: absolute;
        bottom: 10px;
        left: 10px;
        opacity: 0;
        transition: opacity 0.2s;
        text-shadow: 1px 1px 1px #000;
      }

      div:hover::before {
        opacity: 1;
      }

      div a {
        line-height: 0;
      }
    `}</style>
  </div>
);
