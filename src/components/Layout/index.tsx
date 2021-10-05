import "twin.macro";
import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Layout: F = ({ children, ...props }) => (
  <Box
    as="main"
    tw="p-2 md:p-4 min-h-full flex flex-col"
    {...props}
  >
    <Navigation />
    {children}
    <Footer />
  </Box>
);
