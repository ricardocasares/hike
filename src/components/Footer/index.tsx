import Link from "next/link";
import { Box } from "@/components/Box";
import { GitHub } from "@/components/Icons/Github";
import { Twitter } from "@/components/Icons/Twitter";
import { A, NavList } from "@/components/Typography";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export const Footer = () => (
  <Box as="footer">
    <HorizontalScroll>
      <nav>
        <NavList>
          <li>
            <Link href="https://github.com/ricardocasares/analogical" passHref>
              <A><GitHub size={12} /> Github</A>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/ricardocasares" passHref>
              <A><Twitter size={12} /> Twitter</A>
            </Link>
          </li>
        </NavList>
      </nav>
    </HorizontalScroll>
  </Box>
);
