export type Highlight = {
  title: string;
  company: string;
  year: string;
  summary: string;
  points: string[];
  link?: string;
  linkLabel?: string;
};

export type Recognition = {
  title: string;
  points: string[];
  link?: string;
  linkLabel?: string;
};

export type Role = {
  title: string;
  company: string;
  year: string;
  summary: string;
  points: string[];
};

export type EvidenceSection = {
  title: string;
  description: string;
  points: string[];
};

export const profileName = "Omar McAdam";
export const profileHeadline =
  "Founder | Founding Engineer | Open Source and Healthtech Builder";

export const profileLinks = [
  { label: "Website", href: "https://mcadam.io" },
  { label: "GitHub", href: "https://github.com/OmarMcadam" },
  { label: "X", href: "https://x.com/OmarMcAdam" },
  { label: "Email", href: "mailto:omar@mcadam.io" },
];

export const professionalProfile = [
  "I build mission-critical products at the intersection of AI, healthcare, open source, and infrastructure. Over 25+ years I have moved from enterprise infrastructure and compliance work into product leadership, company building, and hands-on engineering.",
  "Recent work includes building patient and AI workflow systems at Legion Health, founding Unproprietary Corporation, and creating UnInbox, an open-source email platform that reached the top 0.03% of GitHub repositories and became Product Hunt's #1 Product of the Day.",
  "My work is shaped by zero-to-one execution. I have started multiple companies, built and exited one, led teams through hypergrowth at ClickUp, judged hackathons, and built communities and OSS projects used by founders, developers, and healthtech operators.",
];

export const homeIntro = [
  "Founder, engineer, and product builder working across AI-native healthcare, open source, and developer infrastructure.",
  "I have spent 25+ years building systems, leading teams, and turning ambiguous ideas into products that reach real users.",
  "Recent work includes Legion Health, Unproprietary Corporation, UnInbox, and open-source tools and communities used by founders and developers around the world.",
];

export const quickFacts = [
  "Built and exited one company, while starting multiple businesses across SaaS, healthtech, and infrastructure.",
  "Architected Legion Health's new patient portal, increasing conversions by 70% and helping power AI-assisted prescription workflows.",
  "Created UnInbox, an open-source email platform that grew to 5,000+ users and ranked in the top 0.03% of GitHub repositories.",
  "Built and now lead the Open Source Founder community with 600+ members and judged two hackathons.",
];

export const selectedAchievements = [
  "Architected and launched the new patient portal at Legion Health, increasing conversion by 70%.",
  "Improved Legion Health onboarding systems, reducing intake appointment cancellations by 30%.",
  "Helped drive the move to Legion AI and the systems behind AI-assisted prescription facilitation tied to Utah expansion and regulatory approval.",
  "Created UnInbox, an open-source email framework and platform that grew to 5,000+ users and ranked in the top 0.03% of GitHub repositories.",
  "Led UnInbox through concept, development, launch, and growth while managing a 5-person team and building an active OSS community around the product.",
  "Launched UnInbox as Product Hunt's #1 Product of the Day and a top-5 product of the week.",
  "Built and now lead the Open Source Founder community with 600+ members, including founders and operators from leading open-source companies.",
  "Created a simpler framework for application encryption that reduced prior implementation overhead by 80%.",
  "Served as an early contributor and open-source advisor to Openwork AI, helping shape product and community direction as it grew to 225,120 installs and approximately 15,000 active users before becoming a Y Combinator company.",
  "Contributed specialist work to major repositories including Documenso, Cap, and Infisical across security hardening, infrastructure scale, and enterprise encryption readiness.",
  "Built and exited NGOSaaS, a SaaS platform for NGO campaign and donation management.",
  "Led roadmap, process, and team scaling at ClickUp, including 100+ planned features, 700+ bugs resolved, and live user sessions reaching 40,000+ attendees.",
];

export const highlights: Highlight[] = [
  {
    title: "Founding Engineer",
    company: "Legion Health",
    year: "Jun 2025-Feb 2026",
    summary:
      "Built core product and AI systems for an AI-native telepsychiatry clinic, helping turn frontier-model workflows into real clinical operations.",
    points: [
      "Architected and launched the new patient portal, increasing conversion by 70%.",
      "Optimized patient onboarding flows, reducing intake appointment cancellations by 30%.",
      "Spearheaded the move to Legion AI, helping unlock Utah expansion and regulatory approval for AI-assisted prescription facilitation.",
      "Directly contributed to the new Legion Health AI prescription workflow covered in the press.",
    ],
    link: "https://nypost.com/2026/03/27/business/artificial-intelligence-can-now-prescribe-mental-health-drugs/?utm_medium=social&utm_source=twitter&utm_campaign=nypost",
    linkLabel: "Press coverage",
  },
  {
    title: "Founder and Chief Meme Officer",
    company: "Unproprietary Corporation",
    year: "Feb 2024-Present",
    summary:
      "Built an umbrella for open-source products, communities, and experiments across AI, health, developer tools, and commercialization.",
    points: [
      "Created and now lead the Open Source Founder community with 600+ members, including founders from leading open-source companies.",
      "Built and launched health and developer products including Potential Health and a simpler app-encryption framework that reduced implementation overhead by 80%.",
      "Regularly publish open-source code adopted across major tech companies and advise startups on OSS strategy, email systems, and developer tooling.",
    ],
  },
  {
    title: "Founding Product Engineer",
    company: "UnInbox",
    year: "Oct 2023-Nov 2024",
    summary:
      "Created an open-source framework for modern email infrastructure and collaboration, built from scratch and grown in public.",
    points: [
      "Architected and built the full email stack, reimagining email storage and access as a modern chat-like system.",
      "Grew the product to 5,000+ users while leading a 5-person team across concept, development, launch, and growth.",
      "Ranked in the top 0.03% of GitHub repositories and became Product Hunt's #1 Product of the Day.",
      "Established a reputation as a subject matter expert in open-source email systems.",
    ],
    link: "https://github.com/un/inbox",
    linkLabel: "View project",
  },
  {
    title: "Founding Engineer",
    company: "Stealth: Health x AI",
    year: "Mar 2025-Jul 2025",
    summary:
      "Served as founding product engineer for a personalized health platform spanning AI, web, backend, and mobile.",
    points: [
      "Led full system design and implementation of the MVP for a B2C and B2E personalized health system.",
      "Owned zero-to-one delivery across product architecture, application logic, and user experience.",
    ],
  },
];

export const recognition: Recognition[] = [
  {
    title: "Open source leadership",
    points: [
      "Built and now run a 600+ member Open Source Founder community that has become a hub for commercialization, community building, and founder knowledge-sharing.",
      "Served as early contributor and open-source advisor to Openwork AI, helping guide product and community direction as it grew to 225,120 installs and about 15,000 active users before becoming a YC company.",
      "Contributed specialist work to leading repositories including Documenso, Cap, and Infisical across security hardening, scale, and enterprise encryption readiness.",
    ],
  },
  {
    title: "Press, judging, and public recognition",
    points: [
      "Featured in national and industry press for work in AI-native healthcare, including New York Post and Healthcare AI Guy coverage related to Legion Health.",
      "Invited to judge two hackathons across the modern web and AI ecosystem.",
      "Built public products and technical work that consistently attract adoption, contributors, and founder attention across open-source communities.",
    ],
    link: "https://www.healthcareaiguy.com/p/company-deep-dive-legion-health",
    linkLabel: "Industry profile",
  },
];

export const openSourceLeadership = [
  "Founder of the Open Source Founder community, a 600+ member network focused on commercialization, community building, founder education, and operating open-source companies.",
  "Creator of UnInbox: https://github.com/un/inbox",
  "Creator of UnWebhook: https://github.com/un/webhook",
  "Regularly publish technical breakdowns, OSS code, and product notes through public channels and developer communities.",
  "Advise founders and startups on email systems, OSS strategy, AI tooling, and product architecture.",
];

export const publicRecognition = [
  "Mentioned in press related to AI-native healthcare and Legion Health, including New York Post coverage of AI-assisted psychiatric prescriptions.",
  "Profiled in Healthcare AI Guy coverage of Legion Health as part of the team building the future of AI-powered psychiatry.",
  "Invited to judge two hackathons in the modern web and AI ecosystem.",
  "Built public open-source work that has attracted contributors, developer adoption, and founder attention across GitHub and startup communities.",
];

export const evidenceSections: EvidenceSection[] = [
  {
    title: "Critical roles and founding leadership",
    description:
      "Record of serving in essential leadership and founding roles across startups, product organizations, and technical systems work.",
    points: [
      "Founding Engineer at Legion Health, building core product and AI workflow systems for an AI-native telepsychiatry company.",
      "Founder of Unproprietary Corporation, leading open-source product, community, and advisory work across AI, health, and developer infrastructure.",
      "Founding Product Engineer at UnInbox, building the product and technical foundation of an open-source email platform from scratch.",
      "Product and team leadership roles at ClickUp, FO HQ Streaming, Essentis HRI, and earlier founder-led ventures.",
    ],
  },
  {
    title: "Original contributions of major significance",
    description:
      "Technical and product work that shows original creation, measurable impact, and field-specific expertise.",
    points: [
      "Architected Legion Health's patient portal, increasing conversion by 70%.",
      "Improved onboarding flows at Legion Health, reducing intake appointment cancellations by 30%.",
      "Helped build the systems behind Legion's AI-assisted prescription workflow and Utah regulatory expansion.",
      "Created UnInbox, a new open-source framework for email collaboration and infrastructure, reaching 5,000+ users and top 0.03% GitHub ranking.",
      "Developed a simplified encryption framework for app builders that reduced prior implementation overhead by 80%.",
    ],
  },
  {
    title: "Published material and public recognition",
    description:
      "Third-party coverage and visible public recognition connected to healthcare AI, open-source work, and product execution.",
    points: [
      "Mentioned in New York Post coverage related to AI-assisted psychiatric prescriptions at Legion Health.",
      "Profiled in Healthcare AI Guy reporting as part of the Legion Health team building AI-powered psychiatry systems.",
      "UnInbox launched as Product Hunt's #1 Product of the Day and a top-5 product of the week.",
      "Built public products and repositories that attracted contributors, adoption, and founder attention across GitHub and startup communities.",
    ],
  },
  {
    title: "Judging, advisory, and peer recognition",
    description:
      "Evidence of external trust, peer visibility, and field-specific recognition beyond direct employment roles.",
    points: [
      "Invited to judge two hackathons across the modern web and AI ecosystem.",
      "Built and now lead the Open Source Founder community with 600+ members, including founders and operators from leading OSS companies.",
      "Served as early contributor and open-source advisor to Openwork AI during a key growth phase leading to 225,120 installs and about 15,000 active users.",
      "Provided expert contributions to Documenso, Cap, and Infisical across security hardening, scale, and enterprise encryption readiness.",
    ],
  },
  {
    title: "Entrepreneurship and commercialization",
    description:
      "Track record of founding, launching, scaling, and exiting products and companies.",
    points: [
      "Started multiple businesses across SaaS, healthtech, training, and open-source product development.",
      "Built and exited NGOSaaS, a SaaS platform for NGO campaign and donation management.",
      "Led UnInbox through concept, development, launch, team leadership, and user growth.",
      "Combined product, engineering, and go-to-market execution throughout founder and early-team roles.",
    ],
  },
];

export const technicalFocus = [
  "Product and systems architecture",
  "TypeScript, React, Next.js, Expo, mobile and web product development",
  "AI workflows, LLM systems, and automation",
  "Open-source infrastructure and developer tooling",
  "Healthcare product systems and patient-facing flows",
  "Data, integrations, APIs, and operational automation",
];

export const roles: Role[] = [
  {
    title: "Founder and Chief Meme Officer",
    company: "Unproprietary Corporation",
    year: "Feb 2024-Present",
    summary:
      "Founder of an open-source product studio focused on AI, health, developer tooling, and community-led company building.",
    points: [
      "Created and now lead the Open Source Founder community with 600+ members.",
      "Built new open-source health and developer products, including Potential Health and a simpler encryption framework for app builders.",
      "Advise founders and startups on OSS commercialization, email systems, AI tooling, and technical product strategy.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Legion Health",
    year: "Jun 2025-Feb 2026",
    summary:
      "Built clinical and operational product systems for an AI-native telepsychiatry company expanding access to psychiatric care.",
    points: [
      "Architected and launched the new patient portal, increasing conversions by 70%.",
      "Reduced intake appointment cancellations by 30% through onboarding and workflow improvements.",
      "Helped drive Legion AI and the systems that enabled Utah expansion and AI prescription facilitation.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Stealth: Health x AI",
    year: "Mar 2025-Jul 2025",
    summary:
      "Founding product engineer for a personalized health platform across AI, full-stack web, and mobile systems.",
    points: [
      "Led full system design and implementation of the MVP for a B2C and B2E personalized health system.",
      "Owned architecture and end-to-end delivery across product, backend, and mobile execution.",
    ],
  },
  {
    title: "Founding Product Engineer",
    company: "UnInbox",
    year: "Oct 2023-Nov 2024",
    summary:
      "Built and led development of an open-source email platform that reframed email as programmable, collaborative infrastructure.",
    points: [
      "Architected and built the complete email infrastructure and product experience from scratch.",
      "Led a 5-person team through concept, development, launch, and user growth.",
      "Grew the platform to 5,000+ users while building an active open-source community from day one.",
    ],
  },
  {
    title: "Product Manager and Team Lead",
    company: "ClickUp",
    year: "Mar 2021-Apr 2022",
    summary:
      "Led product development and engineering teams focused on core platform quality, scale, and execution during hypergrowth.",
    points: [
      "Built and prioritized a roadmap of 100+ features through user research and platform analysis.",
      "Helped resolve 700+ bugs and stability issues by driving root-cause work across teams.",
      "Created new development processes that supported scale from 50 to 500 people.",
      "Ran live user sessions for 40,000+ attendees and grew teams from 4 to 15 people.",
    ],
  },
  {
    title: "Lead Product Manager - B2B SaaS/PaaS",
    company: "FO HQ Streaming Ltd",
    year: "Jul 2020-Feb 2021",
    summary:
      "Built and launched a streaming platform and hardware stack from scratch for business users with minimal technical overhead.",
    points: [
      "Created a streaming hardware kit at 10% of market cost, increasing adoption by 75%.",
      "Scaled the platform to 10,000+ weekly streaming minutes across 150+ business users.",
      "Led remote product and engineering teams to ship 30+ core features.",
    ],
  },
  {
    title: "Product Manager - Internal Tools",
    company: "Essentis HRI",
    year: "2018-2019",
    summary:
      "Drove internal tooling and automation initiatives that materially improved signup performance and operating efficiency.",
    points: [
      "Increased new user signup by 145% and reduced onboarding drop-off by 240%.",
      "Built workflow automation tools that improved process efficiency by 200x.",
      "Hired and led a remote engineering team across three time zones, shipping 50+ features.",
    ],
  },
  {
    title: "Product Manager - B2C Hardware",
    company: "WBS Training AG",
    year: "2018",
    summary:
      "Led development of integrated hardware and software training systems from concept through production handoff.",
    points: [
      "Took a new training system from board approval through to manufactured product.",
      "Built working prototypes across user, software, and manufacturing stakeholders.",
      "Managed the full product cycle from research and specs through prototype and manufacturing handoff.",
    ],
  },
  {
    title: "Co-Founder - B2B Service",
    company: "C.Network",
    year: "2016-2017",
    summary:
      "Led a tech startup from concept through MVP and a successful pivot driven by market data.",
    points: [
      "Built and launched the initial product after identifying the opportunity through user and competitor analysis.",
      "Recognized changing market dynamics early and led a successful business model pivot.",
      "Designed the technical architecture and selected the stack for a scalable platform.",
    ],
  },
  {
    title: "Product Manager - B2C Service and Internal Tools",
    company: "Essentis Biohotel Berlin",
    year: "2015-2016",
    summary:
      "Led digital transformation work across hotel operations and guest experience.",
    points: [
      "Redesigned guest services, improving satisfaction by 45%.",
      "Built integrated hardware and software systems to digitize the guest journey.",
      "Created internal tools to streamline hotel operations with the development team.",
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
    company: "Sub contractor",
    year: "2013",
    summary:
      "Led design and implementation of a new datacenter facility, coordinating vendors and technical specifications.",
    points: [],
  },
  {
    title: "Technical Consultant",
    company: "Netlogic Consulting Limited",
    year: "2009",
    summary:
      "Directed large-scale IT infrastructure projects including a 300-seat call center upgrade and service-management compliance work.",
    points: [],
  },
  {
    title: "Technology Manager",
    company: "Westgate Media and Broadcast Limited",
    year: "2006",
    summary:
      "Managed IT and video infrastructure for a production facility requiring 24/7 broadcast reliability.",
    points: [],
  },
  {
    title: "Co-Founder",
    company: "EGYComp Training Center",
    year: "2003",
    summary:
      "Co-founded a Microsoft certification training center, developed curriculum, and delivered technical courses.",
    points: [],
  },
  {
    title: "IT Support",
    company: "Netlogic Consulting Limited",
    year: "2002",
    summary:
      "Provided enterprise network infrastructure support for consulting clients.",
    points: [],
  },
];

export const pressLinks = {
  nyPost:
    "https://nypost.com/2026/03/27/business/artificial-intelligence-can-now-prescribe-mental-health-drugs/?utm_medium=social&utm_source=twitter&utm_campaign=nypost",
  healthcareAiGuy: "https://www.healthcareaiguy.com/p/company-deep-dive-legion-health",
};
