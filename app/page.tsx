import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Omar McAdam
      </h1>
      <span className="ml-4 text-xl font-light tracking-tighter italic">
        Full-Stack & Mobile Engineer · Founder · Systems Thinker
      </span>
      <p className=" mb-4 italic">📍 Europe → San Francisco (open to remote)</p>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">
          Founder-minded engineer with a rare path from infrastructure
        </p>
        <p className="">and ISO 27001 consulting into product management</p>
        <p className="">and full-stack/mobile development.</p>
        <p className="">
          I've built technically ambitious products from the ground up.
        </p>
      </div>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">I thrive on solving hard problems,</p>
        <p className="">turning vague ideas into working software,</p>
        <p className="">and shipping quickly with modern tools.</p>
        <p className="">I've led teams through zero-to-one cycles.</p>
      </div>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">Built a full email system and an AI health coach.</p>
        <p className="">Processed 70,000+ emails with 99.99% uptime.</p>
        <p className="">
          Grew UnInbox to 5,000+ users and active OSS contributors.
        </p>
        <p className="">
          Building in public with React, Next.js, AI SDK, and more.
        </p>
      </div>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">
          Created UnWebhook.com for inspecting incoming webhooks.
        </p>
        <p className="">
          Run a community of 600+ Commercial Open Source founders.
        </p>
        <p className="">Share technical breakdowns and OSS snippets on X.</p>
        <p className="">Always shipping, always learning, always building.</p>
      </div>

      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
