import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-4 text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn btn-dark mt-8">Back to home</Link>
    </section>
  );
}
