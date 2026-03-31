import type { Metadata } from "next";
import Link from "next/link";

import {
  BulletList,
  ExperienceSection,
  SectionTitle,
} from "app/components/profile-sections";
import {
  evidenceSections,
  openSourceLeadership,
  pressLinks,
  professionalProfile,
  profileHeadline,
  profileLinks,
  profileLocation,
  profileName,
  publicRecognition,
  roles,
  selectedAchievements,
  technicalFocus,
} from "app/lib/profile";

export const metadata: Metadata = {
  title: "CV",
  description: "Professional profile and CV for Omar McAdam.",
};

export default function Page() {
  return (
    <section className="print:text-black">
      <div className="mb-10 border-b border-neutral-200 pb-8 dark:border-neutral-800 print:mb-8 print:border-neutral-300 print:pb-6">
        <h1 className="text-2xl font-semibold tracking-tighter print:text-3xl">
          {profileName}
        </h1>
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-200 print:text-black">
          {profileHeadline}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 print:text-neutral-700">
          {profileLocation}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm print:gap-x-3">
          {profileLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-blue-500 dark:text-blue-300 print:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 print:hidden"
          >
            Raw markdown
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 print:text-neutral-700">
          Some older public references may appear under the name Omayr McAdam.
        </p>
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Professional Profile</SectionTitle>
        <div className="space-y-4 print:space-y-3">
          {professionalProfile.map((paragraph) => (
            <p key={paragraph} className="print:text-black">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Distinguishing Evidence</SectionTitle>
        <div className="space-y-5 print:space-y-4">
          {evidenceSections.map((section) => (
            <div
              key={section.title}
              className="print-avoid-break rounded-xl border border-neutral-200 p-4 dark:border-neutral-800 print:rounded-none print:border-neutral-300 print:p-3"
            >
              <h3 className="text-lg font-semibold print:text-base">{section.title}</h3>
              <p className="mt-1 mb-3 text-sm text-gray-600 dark:text-gray-300 print:text-neutral-700">
                {section.description}
              </p>
              <BulletList points={section.points} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Selected Achievements</SectionTitle>
        <BulletList points={selectedAchievements} />
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Public Recognition</SectionTitle>
        <BulletList points={publicRecognition} />
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm print:gap-x-3">
          <a
            href={pressLinks.nyPost}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 print:text-black"
          >
            New York Post
          </a>
          <a
            href={pressLinks.healthcareAiGuy}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-blue-300 print:text-black"
          >
            Healthcare AI Guy
          </a>
        </div>
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Open Source and Community Leadership</SectionTitle>
        <BulletList points={openSourceLeadership} />
      </div>

      <div className="mb-12 print:mb-8">
        <SectionTitle>Technical Focus</SectionTitle>
        <BulletList points={technicalFocus} />
      </div>

      <ExperienceSection roles={roles} />

      <p className="text-sm text-gray-600 dark:text-gray-300 print:hidden">
        For the shorter public-facing version, see{" "}
        <Link href="/work" className="text-blue-500 dark:text-blue-300">
          /work
        </Link>
        .
      </p>
    </section>
  );
}
