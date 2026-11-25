import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const metadata = pageMetadata(
  "Website Terms",
  "Information about property listings, inquiries, site visits, and calculator estimates.",
  "/terms-and-conditions",
);
export default function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="WEBSITE INFORMATION"
        title="A clear starting point."
      />
      <article className="container section legal-copy">
        <h2>Property information</h2>
        <p>
          Property specifications, price ranges, project status, and images are
          drawn from the existing Mais Agro House website. They are an
          introduction to the available property categories, not a binding
          offer. Confirm current prices, availability, dimensions, amenities,
          and the relevant documentation directly with the team. Images may be
          illustrative.
        </p>
        <h2>Inquiries and visits</h2>
        <p>
          Preparing a WhatsApp message does not submit an inquiry or reserve a
          property. A requested visit is confirmed only after the team agrees
          the arrangements with you. No payment or property booking is processed
          on this website.
        </p>
        <h2>Calculator and articles</h2>
        <p>
          The EMI calculator provides an estimate based on the entered amount,
          interest rate, and duration. It excludes fees and other
          lender-specific charges. Articles preserve the original authors’
          published content and are general information, not personalised legal
          or investment advice.
        </p>
        <h2>Transaction terms</h2>
        <p>
          Property-specific terms, service scope, charges, and documentation
          should be agreed directly with the company before a commitment. Refer
          to the existing website’s{" "}
          <a
            href={`${site.sourceUrl}/terms-and-conditions`}
            target="_blank"
            rel="noopener noreferrer"
          >
            published business terms
          </a>{" "}
          and request the terms applicable to your transaction.
        </p>
        <h2>Contact</h2>
        <p>
          For clarification, write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </article>
    </>
  );
}
