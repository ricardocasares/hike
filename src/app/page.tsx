import { get_issues } from "@/lib/github";
import Link from "next/link";

export default async function Home() {
  const issues = await get_issues();

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Entries</h2>
      <ul className="font-mono">
        {issues.map((issue) => (
          <li key={issue.number}>
            <Link href={`/issues/${issue.number}`}>
              <h3 className="flex gap-2">
                <span className="text-neutral">{issue.created_at}</span>
                <span>{issue.title}</span>
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
