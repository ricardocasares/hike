
import { FunctionComponent as F } from "react";
import { Stack } from "@/components/Stack";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const Layout: F = ({ children, ...props }) => (
  <Stack {...props} pad="md">
    <Navigation />
    <Stack as="main" css={{ flex: 1 }}>
      {children}
    </Stack>
    <Footer />
  </Stack>
);
