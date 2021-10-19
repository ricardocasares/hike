import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Toggle } from "@/components/Toggle";
import { A, NavList } from "@/components/Typography";
import { HorizontalScroll } from "@/components/HorizontalScroll";

export const Navigation = () => {

  return (
    <HorizontalScroll>
      <nav>
        <NavList css={{ display: 'flex' }}>
          <li>
            <Link href="/" passHref>
              <A><Logo /></A>
            </Link>
          </li>
          <li>
            <Link href="/changelog" passHref>Changelog</Link>
          </li>
          <li>
            <Link href="/code" passHref>Code</Link>
          </li>
          <li><Toggle /></li>
        </NavList>
      </nav>
    </HorizontalScroll>
  );
};
