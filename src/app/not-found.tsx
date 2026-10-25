import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><h1>Page not found</h1><p>That page isn't here. You can find my projects on the homepage.</p><Link className="text-link" href="/">Back to my portfolio</Link></main>;
}
