import Link from "./Link";

export default () => (
  <nav>
    <ul>
      <li>
        <Link prefetch route="index">
          Home
        </Link>
      </li>
      <li>
        <Link prefetch route="work">
          Work
        </Link>
      </li>
      <li>
        <Link prefetch route="/changelog">
          Changelog
        </Link>
      </li>
      <li>
        <Link prefetch route="/photos">
          Photos
        </Link>
      </li>
    </ul>
    <style jsx>{`
      nav {
        margin-top: 20px;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: inline;
        margin-right: 20px;
      }

      li:last-of-type {
        margin-right: 0;
      }

      @media (min-width: 425px) {
        nav {
          margin-top: 0;
          text-align: right;
        }
      }
    `}</style>
  </nav>
);
