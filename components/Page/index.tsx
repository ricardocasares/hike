import { FunctionComponent } from "react";
import Box from "@app/components/Box";
import Footer from "@app/components/Footer";
import Navigation from "@app/components/Navigation";

export const Page: FunctionComponent<Box> = ({ children, ...props }) => (
  <Box
    p={[3, 5]}
    display="flex"
    flexDirection="column"
    minHeight="100%"
    bg="dark.0"
    {...props}
  >
    <Box as="header">
      <Navigation />
    </Box>
    {children}
    <Footer />
  </Box>
);

export default Page;
