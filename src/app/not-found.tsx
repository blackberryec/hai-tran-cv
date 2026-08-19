import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <p className="eyebrow">404 / OFF THE MAP</p>
      <h1>This system has no route.</h1>
      <Link className="button-link button-dark" href="/">Return home →</Link>
    </main>
  );
}
