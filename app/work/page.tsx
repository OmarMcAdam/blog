import Link from "next/link";

import {
  ExperienceSection,
  HighlightsSection,
  RecognitionSection,
} from "app/components/profile-sections";
import {
  highlights,
  professionalProfile,
  recognition,
  roles,
} from "app/lib/profile";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Work</h1>

      <div className="mb-12 space-y-4">
        {professionalProfile.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p>
          For a more formal profile, see <Link href="/cv" className="text-blue-500 dark:text-blue-300">/cv</Link>.
        </p>
      </div>

      <HighlightsSection items={highlights} />
      <RecognitionSection items={recognition} />
      <ExperienceSection roles={roles} />
    </section>
  );
}
