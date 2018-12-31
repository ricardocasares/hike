import styled from "@app/lib/styled";
import HorizontalScroll from "@app/components/Scroller";
import { NavList } from "@app/components/Typography/List";
import Github from "@app/components/Icons/Github";
import Twitter from "@app/components/Icons/Twitter";

const Footer = styled.footer`
  margin-top: 40px;
`;

export const Navigation = () => (
  <Footer>
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
  </Footer>
);

export default Navigation;
