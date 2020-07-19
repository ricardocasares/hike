import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";
import { H4, P, A } from "@/components/Typography";

export type Card = {
  id: string;
  url: string;
  name: string;
  stars: number;
  description: string;
} & Box;

export const Card: F<Card> = ({ id, url, name, description, ...props }) => (
  <Box border="1px solid #666" borderRadius="4px" p={3} {...props}>
    <H4 style={{ margin: 0 }}>
      <A href={url}>{name}</A>
    </H4>

    <P>{description}</P>
  </Box>
);
