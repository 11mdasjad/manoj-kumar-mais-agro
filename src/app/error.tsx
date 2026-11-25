"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container empty-state error-page">
      <p className="eyebrow">LET’S TRY THAT AGAIN</p>
      <h1>We couldn’t load this page.</h1>
      <p>Please try again, or call us on +91 80080 07062.</p>
      <button className="button button-green" onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
