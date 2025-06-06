export default function Page() {
  const keyProjects = [
    {
      title: "Founder & Engineer",
      company: "UnInbox",
      year: "October 2023–November 2024",
      link: "https://github.com/un/inbox",
      summary:
        "A fully open-source, standalone email platform — architected and built from scratch",
      points: [
        "70,000+ emails processed with 99.99% uptime",
        "Reimagined email as a chat-like experience with live updates and syncless storage",
        "Built with Next.js, tRPC, Drizzle ORM, Tailwind, hosted on Vercel + PlanetScale",
        "Grew to 5,000+ users and active open-source contributors",
      ],
    },
    {
      title: "Builder",
      company: "Potential Health",
      year: "Feb 2025–Now",
      link: "https://github.com/un/potential",
      summary: "Mobile AI health coach built with Expo, AI SDK, Hono, Drizzle",
      points: [
        "Tracks health insights and user goals across time",
        "Real-time feedback powered by LLMs and a composable API layer",
        "Shipped MVP solo in <4 weeks using tRPC + native SQLite sync",
      ],
    },
  ];

  const toolingProjects = [
    {
      name: "UnWebhook.com",
      description: "Tool to inspect incoming webhooks",
      link: "https://github.com/un/webhook",
    },
    {
      name: "OSS Community",
      description:
        "Built and run a community of 600+ Commercial Open Source founders and engineers",
    },
    {
      name: "Technical Content",
      description:
        "Shared technical breakdowns + OSS snippets via @OmarMcAdam on X",
    },
  ];

  const roles = [
    {
      title: "Product Manager & Team Lead",
      company: "ClickUp",
      year: "2021",
      summary:
        "Led cross-functional teams to scale core platform. Blended product vision with early-stage engineering leadership.",
      points: [
        "Built and prioritized a roadmap of 100+ features by engaging users and analyzing platform metrics",
        "Resolved 700+ critical bugs, significantly enhancing platform stability",
        "Redesigned team processes to support scale from 50 → 500 employees",
        "Facilitated live user sessions with 40,000+ attendees to gather feedback and showcase features",
        "Expanded teams from 4 to 15, driving continuous product improvements",
      ],
    },
    {
      title: "Lead Product Manager",
      company: "FO HQ Streaming",
      year: "2020",
      summary:
        "Spearheaded development and launch of a streaming platform, rapidly growing to 50,000+ viewers in its first year.",
      points: [
        "Developed cost-effective streaming hardware kits at 10% market price, boosting adoption by 75%",
        "Scaled platform usage to 10,000+ weekly streaming minutes across 150+ businesses",
        "Directed remote teams to deliver 30+ core features on schedule",
        "Engineered an end-to-end streaming solution combining hardware and software for non-technical users",
        "Conducted weekly user sessions to identify pain points and refine product roadmap",
      ],
    },
    {
      title: "Product Manager",
      company: "Essentis HRI",
      year: "2018",
      summary:
        "Drove product strategy and automation initiatives to accelerate user growth and operational efficiency.",
      points: [
        "Boosted new user signups by 145% and cut onboarding drop-off by 240% through targeted tool development",
        "Implemented workflow automation tools that improved efficiency by 200x",
        "Led a remote engineering team across 3 time zones, delivering 50+ features",
        "Collaborated closely with CEO to define success metrics and steer product direction",
      ],
    },
    {
      title: "Product Manager",
      company: "WBS Training",
      year: "2018",
      summary:
        "Led end-to-end development of integrated hardware/software training systems from concept to production.",
      points: [
        "Guided new training system from board approval through manufacturing",
        "Coordinated prototype development across users, software teams, and manufacturers",
        "Managed full product lifecycle: user research → specs → prototype → manufacturing handoff",
      ],
    },
    {
      title: "Co-Founder",
      company: "C.Network",
      year: "2016",
      summary:
        "Directed tech startup from MVP to successful pivot, guided by market and user insights.",
      points: [
        "Launched initial product after comprehensive user and competitor analysis",
        "Pivoted business model based on evolving market data",
        "Designed scalable technical architecture and selected technology stack",
        "Cultivated strong team culture through mentorship and alignment sessions",
      ],
    },
    {
      title: "Product Manager",
      company: "Essentis Biohotel",
      year: "2015",
      summary:
        "Led digital transformation initiatives to enhance hotel operations and guest experience.",
      points: [
        "Redesigned guest services, boosting satisfaction by 45%",
        "Developed integrated hardware/software systems to digitize hotel experience",
        "Created internal tools to streamline operations with development team",
      ],
    },
    {
      title: "Founder",
      company: "NGOSaaS",
      year: "2014",
      summary:
        "Built and exited a SaaS platform for NGO campaign and donation management.",
      points: [],
    },
    {
      title: "Datacenter Consultant",
      company: "Digital Ocean",
      year: "2013",
      summary:
        "Led design and delivery of a new datacenter, optimizing vendor collaboration and technical standards.",
      points: [],
    },
    {
      title: "Technical Consultant",
      company: "Netlogic Consulting",
      year: "2009",
      summary:
        "Directed large-scale IT infrastructure upgrades including a 300-seat call center and compliance frameworks.",
      points: [],
    },
    {
      title: "Technology Manager",
      company: "Westgate Media & Broadcast",
      year: "2006",
      summary:
        "Managed IT infrastructure ensuring 24/7 broadcast reliability for video production facilities.",
      points: [],
    },
    {
      title: "Co-Founder",
      company: "EGYComp Training Center",
      year: "2003",
      summary:
        "Established and operated a Microsoft certification training center, developing curriculum and delivering courses.",
      points: [],
    },
    {
      title: "IT Support",
      company: "Netlogic Consulting",
      year: "2002",
      summary:
        "Provided network infrastructure support for enterprise clients.",
      points: [],
    },
  ];
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Work</h1>
      <div className="my-8">
        <p>
          Founder-minded engineer with a rare path from infrastructure and ISO
          27001 consulting into product management and full-stack/mobile
          development.
        </p>
        <p>
          I've built technically ambitious products from the ground up —
          including a full email system and an AI health coach — and led teams
          through zero-to-one cycles.
        </p>
        <p>
          I thrive on solving hard problems, turning vague ideas into working
          software, and shipping quickly with modern tools.
        </p>
        <p>
          From infrastructure consulting to building products that scale to
          thousands of users.
        </p>
        <p>-</p>
        <p>I'm actively building in the open source community.</p>
        <p>
          Running a community of 600+ Commercial Open Source founders and
          engineers, sharing technical breakdowns and OSS snippets.
        </p>
        <p>
          Recent projects include UnInbox (open-source email platform) and
          Potential Health (AI health coach with Expo and tRPC).
        </p>
        <p>
          Tech stack: React, Next.js, Tailwind, Expo, Hono.js, tRPC, AI SDK,
          PlanetScale/MySQL, Drizzle ORM.
        </p>
      </div>
      <KeyProjects projects={keyProjects} />
      <ToolingProjects projects={toolingProjects} />
      <CV roles={roles} />
    </section>
  );
}

const RoleDisplay = ({ role }: { role: any; key?: number }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-baseline mb-2">
        <div>
          <h3 className="text-lg font-semibold">{role.title}</h3>
          <p className=" text-gray-700 dark:text-gray-200">{role.company}</p>
        </div>
        <span className="text-gray-500 dark:text-gray-200 ">{role.year}</span>
      </div>

      <p className="text-gray-800 dark:text-gray-200  mb-2">{role.summary}</p>

      {role.points && role.points.length > 0 && (
        <ul className="list-disc list-outside ml-5 space-y-1">
          {role.points.map((point, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-200 ">
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CV = ({ roles }: { roles: any[] }) => {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-xl font-bold mb-6">Professional Experience</h1>
        {roles.map((role, index) => (
          <RoleDisplay key={index} role={role} />
        ))}
      </div>
    </div>
  );
};

const KeyProjects = ({ projects }: { projects: any[] }) => {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-bold mb-6">Key Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className=" text-gray-700 dark:text-gray-200">
                {project.company}
              </p>
            </div>
            <span className="text-gray-500 dark:text-gray-200 ">
              {project.year}
            </span>
          </div>

          <p className="text-gray-800 dark:text-gray-200  mb-2">
            {project.summary}
          </p>

          {project.points && project.points.length > 0 && (
            <ul className="list-disc list-outside ml-5 space-y-1">
              {project.points.map((point, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-200 ">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

const ToolingProjects = ({ projects }: { projects: any[] }) => {
  return (
    <div className="mb-12">
      <h1 className="text-xl font-bold mb-6">Tooling Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className=" text-gray-700 dark:text-gray-200">
                {project.description}
              </p>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-300"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
