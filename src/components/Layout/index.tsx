import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Layout: F<Box> = ({ children, ...props }) => (
  <Box
    as="main"
    padding={[20, 40]}
    height="100vh"
    display="flex"
    flexDirection="column"
    {...props}
  >
    <Navigation />
    {children}
    <Footer />
  </Box>
);
