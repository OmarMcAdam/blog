import Link from "next/link";

import {
  homeIntro,
  profileHeadline,
  profileName,
  quickFacts,
} from "app/lib/profile";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        {profileName}
      </h1>
      <p className="mb-2 text-lg text-gray-800 dark:text-gray-200">
        {profileHeadline}
      </p>
      <div className="mb-8 space-y-4">
        {homeIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">A few signals</h2>
        <ul className="ml-5 list-outside list-disc space-y-2">
          {quickFacts.map((fact) => (
            <li key={fact} className="text-gray-700 dark:text-gray-200">
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <Link href="/work" className="text-blue-500 dark:text-blue-300">
          View work profile
        </Link>
        <Link href="/cv" className="text-blue-500 dark:text-blue-300">
          View formal CV
        </Link>
      </div>
    </section>
  );
}
