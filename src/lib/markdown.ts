import { unified } from "unified";
import parse from "remark-parse";
import rehype from "remark-rehype";
import shiki from "@shikijs/rehype";
import stringify from "rehype-stringify";

export async function render(markdown: string): Promise<string> {
  const content = await unified()
    .use(parse) // Parse markdown content to a syntax tree
    .use(rehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(shiki, {
      themes: {
        dark: "dark-plus",
        light: "light-plus",
      },
    })
    .use(stringify) // Serialize HTML syntax tree
    .process(markdown);

  return content.toString();
}
