export default function Loading() {
  return (
    <div
      className="container loading-page"
      role="status"
      aria-label="Loading page"
    >
      <div className="skeleton h-5 w-40" />
      <div className="skeleton h-16 w-3/4 mt-6" />
      <div className="property-grid mt-12">
        {[0, 1, 2].map((i) => (
          <div key={i} className="skeleton h-80" />
        ))}
      </div>
      <span className="sr-only">Loading your next possibility…</span>
    </div>
  );
}
