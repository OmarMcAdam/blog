import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Omar McAdam
      </h1>
      <span className="ml-4 text-xl font-light tracking-tighter italic">
        also known as McPizza
        </span>
      <p className=" mb-4 italic">
        Founder, Builder, Tinkerer, Developer, & ex Pizza lover.
      </p>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">I make things.</p>
        <p className="">Digital things.</p>
        <p className="">Physical things.</p>
        <p className="">They either work or don't.</p>
      </div>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">I'm always curious.</p>
        <p className="">About what could be.</p>
        <p className="">How it could be.</p>
        <p className="">Why it isn't already.</p>
      </div>
      <div className="flex flex-col mb-4 text-sm">
        <p className="">I build to answer questions.</p>
        <p className="">Tinker to learn something new.</p>
        <p className="">Develop to solve problems.</p>
        <p className="">And eat pizza because its the best.</p>
      </div>

      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
