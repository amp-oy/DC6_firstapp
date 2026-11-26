
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="rounded-xl bg-white p-10 shadow-lg">

        <p className="mb-3 font-medium text-indigo-600">
          WELCOME TO MY WEBSITE
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-5xl">
          Hi! I'm John Paul.
        </h1>

        <p className="mb-4 leading-relaxed text-gray-600">
          I am currently studying Information Technology
          and have an interest in computers, coding, and
          website development.
        </p>

        <p className="mb-8 leading-relaxed text-gray-600">
          I like exploring new tools, improving my
          programming skills, and building projects
          that can be useful in everyday life.
        </p>

        <Link
          href="/projects"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Explore My Work
        </Link>

      </section>
    </main>
  );
}
