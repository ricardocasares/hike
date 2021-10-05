import "twin.macro";
import { FunctionComponent as F } from "react";
import { Box } from "@/components/Box";

export type Card = {
  id: string;
  url: string;
  name: string;
  stars: number;
  description: string;
} & typeof Box;

export const Card: F<Card> = ({ id, url, name, description, ...props }) => (
  <Box
    tw="border border-solid rounded p-2"
    {...props}
  >
    <h4>
      <a href={url}>{name}</a>
    </h4>

    <p>{description}</p>
  </Box>
);
