import { unified } from "unified";
import prism from "@mapbox/rehype-prism";
import stringify from "rehype-stringify";
import parse from "remark-parse";
import rehype from "remark-rehype";

export async function render(markdown: string): Promise<string> {
  const content = await unified()
    .use(parse) // Parse markdown content to a syntax tree
    .use(rehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
    .use(prism as any)
    .use(stringify) // Serialize HTML syntax tree
    .process(markdown);

  return content.toString();
}
