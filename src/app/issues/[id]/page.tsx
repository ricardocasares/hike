import "./prism.css";
import { render } from "@/lib/markdown";
import { get_issue, get_issues } from "@/lib/github";

type Page = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Page) {
  const issue = await get_issue(params.id);
  const __html = await render(issue.body);

  return (
    <div className="prose">
      <h2>{issue.title}</h2>
      <div dangerouslySetInnerHTML={{ __html }}></div>
    </div>
  );
}

export async function generateStaticParams() {
  const issues = await get_issues();

  return issues.map((issue) => ({
    id: issue.number.toString(),
  }));
}
