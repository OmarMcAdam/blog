import type { ReactNode } from "react";

import type { Highlight, Recognition, Role } from "app/lib/profile";

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-6 text-xl font-bold">{children}</h2>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function MetaLine({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 dark:text-gray-200">{children}</p>;
}

export function Summary({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-gray-800 dark:text-gray-200">{children}</p>;
}

export function BulletList({ points }: { points: string[] }) {
  if (!points.length) {
    return null;
  }

  return (
    <ul className="ml-5 list-outside list-disc space-y-1">
      {points.map((point) => (
        <li key={point} className="text-gray-700 dark:text-gray-200">
          {point}
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({ href, label }: { href?: string; label?: string }) {
  if (!href || !label) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 dark:text-blue-300"
    >
      {label}
    </a>
  );
}

export function HighlightsSection({ items }: { items: Highlight[] }) {
  return (
    <div className="mb-12">
      <SectionTitle>Selected Impact</SectionTitle>

      {items.map((item) => (
        <div key={`${item.company}-${item.title}`} className="mb-8">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <div>
              <CardTitle>{item.title}</CardTitle>
              <MetaLine>{item.company}</MetaLine>
            </div>
            <span className="text-right text-gray-500 dark:text-gray-200">
              {item.year}
            </span>
          </div>

          <Summary>{item.summary}</Summary>
          <BulletList points={item.points} />

          <div className="mt-3">
            <ExternalLink href={item.link} label={item.linkLabel} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function RecognitionSection({ items }: { items: Recognition[] }) {
  return (
    <div className="mb-12">
      <SectionTitle>Recognition</SectionTitle>

      {items.map((item) => (
        <div key={item.title} className="mb-8">
          <CardTitle>{item.title}</CardTitle>
          <div className="mt-2">
            <BulletList points={item.points} />
          </div>

          <div className="mt-3">
            <ExternalLink href={item.link} label={item.linkLabel} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExperienceSection({ roles }: { roles: Role[] }) {
  return (
    <div className="w-full">
      <div className="mb-12 print:mb-8">
        <SectionTitle>Professional Experience</SectionTitle>

        {roles.map((role) => (
          <div
            key={`${role.company}-${role.title}-${role.year}`}
            className="print-avoid-break mb-8 print:mb-6"
          >
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <div>
                <CardTitle>{role.title}</CardTitle>
                <MetaLine>{role.company}</MetaLine>
                {role.location && <MetaLine>{role.location}</MetaLine>}
              </div>
              <span className="text-right text-gray-500 dark:text-gray-200">
                {role.year}
              </span>
            </div>

            <Summary>{role.summary}</Summary>
            <BulletList points={role.points} />
          </div>
        ))}
      </div>
    </div>
  );
}
