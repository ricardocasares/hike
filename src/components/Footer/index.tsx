import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { GitHub } from "@/components/Icons/Github";
import { Twitter } from "@/components/Icons/Twitter";
import { NavList } from "@/components/Typography/List";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export const Footer: F = () => (
  <Box as="footer" marginTop="40px">
    <HorizontalScroll>
      <nav>
        <NavList>
          <li>
            <a href="https://github.com/ricardocasares/analogical">
              <GitHub size={12} /> Github
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
  </Box>
);
