import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container empty-state error-page">
      <p className="eyebrow">404 · A DIFFERENT DIRECTION</p>
      <h1>Let’s find the right place.</h1>
      <p>This page isn’t available. There are more possibilities to explore.</p>
      <Link href="/properties" className="button button-green">
        Explore Properties
      </Link>
    </section>
  );
}
