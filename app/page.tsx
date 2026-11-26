
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello, my name is John paul</h1>

      <p>
        I am a college student who enjoys learning programming
        and developing websites.
        I want to improve my skills in web development
        and create useful applications.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block underline"
      >
        See my projects
      </Link>
    </div>
  );
}
