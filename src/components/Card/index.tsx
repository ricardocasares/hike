import { FunctionComponent as F } from "react";
import { Stack } from "@/components/Stack";
import { A, P, H2 } from "@/components/Typography";

export type Card = {
  id: string;
  url: string;
  name: string;
  stargazers: number;
  description: string;
};

export const Card: F<Card> = ({ id, url, name, description, stargazers, ...props }) => (
  <Stack {...props} css={{ border: "1px solid $slate6", borderRadius: "$2" }} pad="md">
    <H2 as="h3">
      <A href={url}>{name} {stargazers}</A>
    </H2>

    <P css={{ color: "$slate10" }}>{description}</P>
  </Stack>
);
