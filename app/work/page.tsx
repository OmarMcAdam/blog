export default function Page() {
  const roles = [
    {
      title: "Founder & CEO",
      company: "UnInbox",
      year: "2023",
      summary:
        "Built and led development of open-source email platform, growing to 5,000+ users.",
      points: [
        "Architected and built complete email infrastructure, reimagining email storage and access as modern chat system",
        "Led 5-person team through full product cycle: concept → development → launch → user growth",
        "Taught myself software development to build initial product while managing overall company vision",
        "Created active open source project from day one, building community around email innovation",
      ],
    },
    {
      title: "Product Manager & Team Lead",
      company: "ClickUp",
      year: "2021",
      summary:
        "Led product development and engineering teams focused on core platform features.",
      points: [
        "Built and prioritized list of 100+ needed features by talking to users and analyzing platform data",
        "Fixed platform stability issues by finding root causes and fixing 700+ bugs",
        "Created new development process that worked as team grew from 50 to 500 people",
        "Connected directly with users through live sessions (40,000+ attendees) to understand their needs and show new features",
        "Grew teams from 4 to 15 people while shipping regular improvements",
      ],
    },
    {
      title: "Lead Product Manager",
      company: "FO HQ Streaming",
      year: "2020",
      summary:
        "Built and launched streaming platform from scratch, reaching 50,000+ viewers within first year.",
      points: [
        "Created affordable streaming hardware kit at 10% market cost, driving 75% increase in customer adoption",
        "Built and grew platform to 10,000+ minutes weekly streaming across 150+ business users",
        "Led remote product and engineering teams to ship 30+ core features",
        "Designed complete streaming solution combining hardware and software for businesses with minimal technical needs",
        "Ran weekly user sessions to identify problems and shape product roadmap",
      ],
    },
    {
      title: "Product Manager",
      company: "Essentis HRI",
      year: "2018",
      summary:
        "Led product strategy and development of internal tools, focusing on user growth and automation.",
      points: [
        "Increased new user signup by 145% and reduced onboarding drop-off by 240% through targeted tool development",
        "Built workflow automation tools that improved process efficiency by 200x",
        "Hired and led remote engineering team across 3 time zones, shipping 50+ features",
        "Worked directly with CEO to define success metrics and shape product direction",
      ],
    },
    {
      title: "Product Manager",
      company: "WBS Training",
      year: "2018",
      summary:
        "Led development of integrated hardware/software training systems from concept to production.",
      points: [
        "Took new training system concept from board approval through to manufactured product",
        "Built working prototypes by coordinating between users, software team, and manufacturers",
        "Managed full product cycle: user research → technical specs → prototype → manufacturing handoff",
      ],
    },
    {
      title: "Co-Founder",
      company: "C.Network",
      year: "2016",
      summary:
        "Led tech startup from concept through MVP and successful pivot based on market data.",
      points: [
        "Built and launched initial product after identifying market opportunity through user and competitor analysis",
        "Recognized shifting market dynamics through data analysis and successfully pivoted business model",
        "Designed technical architecture and selected technology stack for scalable platform",
        "Fostered strong team culture through mentorship and regular alignment sessions",
      ],
    },
    {
      title: "Product Manager",
      company: "Essentis Biohotel",
      year: "2015",
      summary:
        "Led digital transformation of hotel operations and guest experience.",
      points: [
        "Redesigned guest services based on industry analysis, improving satisfaction by 45%",
        "Built integrated hardware/software system to digitize entire hotel experience",
        "Created internal tools to streamline hotel operations with development team",
      ],
    },
    {
      title: "Founder",
      company: "NGOSaaS",
      year: "2014",
      summary:
        "Built and successfully exited SaaS platform for NGO campaign and donation management.",
      points: [],
    },
    {
      title: "Datacenter Consultant",
      company: "Digital Ocean",
      year: "2013",
      summary:
        "Led design and implementation of new datacenter facility, managing vendor relationships and technical specifications.",
      points: [],
    },
    {
      title: "Technical Consultant",
      company: "Netlogic Consulting",
      year: "2009",
      summary:
        "Led large-scale IT infrastructure projects including 300-seat call center upgrade. Implemented ISO/IEC 20000 compliance framework and established release management processes.",
      points: [],
    },
    {
      title: "Technology Manager",
      company: "Westgate Media & Broadcast",
      year: "2006",
      summary:
        "Managed IT infrastructure and technical systems for video production facility, ensuring 24/7 broadcast capability.",
      points: [],
    },
    {
      title: "Co-Founder",
      company: "EGYComp Training Center",
      year: "2003",
      summary:
        "Established and ran Microsoft certification training center, developing curriculum and delivering courses.",
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
        <p>I solve hard technical problems.</p>
        <p>
          My path has taken me from product leader to hands-on developer,
          building everything from email systems to streaming platforms from
          scratch.
        </p>
        <p>
          I lead teams by example, writing code, designing architectures, and
          finding unconventional solutions where others see blockers.
        </p>
        <p>When a product needs to exist, I figure out how to build it.</p>
        <p>-</p>
        <p>My curiosity extends beyond software.</p>
        <p>
          I'm usually working on multiple hardware projects - from 3D printing
          to electronics and solar systems.
        </p>
        <p>
          I've shared complex technical concepts with thousands through
          livestreams and videos.
        </p>
        <p>
          This hands-on experience with different technologies helps me see
          opportunities others miss.
        </p>
      </div>
      <CV roles={roles} />
    </section>
  );
}

const RoleDisplay = ({ role }) => {
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

const CV = ({ roles }) => {
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
