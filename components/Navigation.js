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
        <Link prefetch route="/blog">
          Blog
        </Link>
      </li>
      <li>
        <a href="https://github.com/ricardocasares">Github</a>
      </li>
    </ul>
    <style jsx>{`
      nav {
        margin-top: 20px;
        display: grid;
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

      @media (min-width: 400px) {
        nav {
          margin-top: 0;
          text-align: right;
        }
      }
    `}</style>
  </nav>
);
