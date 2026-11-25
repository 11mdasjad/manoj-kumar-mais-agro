import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "Website Privacy",
  "How this website handles inquiry forms and visitor information.",
  "/privacy-policy",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE PRIVACY"
        title="Your details, handled with clarity."
      />
      <article className="container section legal-copy">
        <h2>Inquiry and site-visit forms</h2>
        <p>
          The forms on this website prepare a message in your browser.
          Completing a form does not submit your details to a Mais Agro House
          database or confirm a booking. When you choose to open WhatsApp, your
          prepared message is passed to WhatsApp. You decide whether to send it
          to our team.
        </p>
        <h2>External services</h2>
        <p>
          WhatsApp, your email provider, and Google Maps operate under their own
          privacy policies. Clicking a link to one of these services leaves this
          website. The hosting provider may process technical request
          information required to serve and secure the site.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This website does not implement advertising trackers, analytics
          cookies, user accounts, or local storage of inquiry details.
        </p>
        <h2>Questions about your information</h2>
        <p>
          For questions about information you have shared with the Mais Agro
          House team, contact <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
          or call <a href={site.phoneHref}>{site.phone}</a>.
        </p>
        <h2>Existing business policy</h2>
        <p>
          The existing website’s{" "}
          <a
            href={`${site.sourceUrl}/privacy-policy`}
            target="_blank"
            rel="noopener noreferrer"
          >
            published business privacy policy
          </a>{" "}
          remains available for reference. This page describes the functionality
          of this website’s inquiry interface.
        </p>
      </article>
    </>
  );
}
