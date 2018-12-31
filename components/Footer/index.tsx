import HorizontalScroll from "@app/components/Scroller";
import { NavList } from "@app/components/Typography/List";
import Github from "@app/components/Icons/Github";
import Twitter from "@app/components/Icons/Twitter";

export const Navigation = () => (
  <footer>
    <HorizontalScroll>
      <nav>
        <NavList>
          <li>
            <a href="https://github.com/ricardocasares/analogical">
              <Github size={12} /> Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ricardocasares">
              <Twitter size={12} /> Twitter
            </a>
          </li>
        </NavList>
      </nav>
    </HorizontalScroll>
  </footer>
);

export default Navigation;
