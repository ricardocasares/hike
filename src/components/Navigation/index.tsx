import Link from "next/link";
import { FunctionComponent as F } from "react";
import { Logo } from "@/components/Logo";
import { NavList } from "@/components/Typography/List";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export const Navigation: F = () => (
  <HorizontalScroll>
    <nav>
      <NavList>
        <li>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/changelog">
            <a>Changelog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </NavList>
    </nav>
  </HorizontalScroll>
);
