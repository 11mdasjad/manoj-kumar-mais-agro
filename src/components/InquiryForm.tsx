"use client";
import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { categories } from "@/data/properties";
import { whatsappUrl } from "@/lib/site";
import { validateInquiry, inquiryMessage, type Inquiry } from "@/lib/inquiry";
export default function InquiryForm({ property = "" }: { property?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as Inquiry;
    const issues = validateInquiry(data);
    setErrors(issues);
    if (Object.keys(issues).length) {
      e.currentTarget
        .querySelector<HTMLInputElement>(`[name="${Object.keys(issues)[0]}"]`)
        ?.focus();
      return;
    }
    setPrepared(whatsappUrl(inquiryMessage(data)));
  }
  return (
    <form
      onSubmit={submit}
      noValidate
      className="inquiry-form"
      onChange={() => prepared && setPrepared("")}
    >
      <div className="form-grid">
        {[
          {
            name: "name",
            label: "Full name",
            type: "text",
            placeholder: "Your name",
            auto: "name",
          },
          {
            name: "phone",
            label: "Phone number",
            type: "tel",
            placeholder: "+91",
            auto: "tel",
          },
          {
            name: "email",
            label: "Email address (optional)",
            type: "email",
            placeholder: "you@example.com",
            auto: "email",
          },
        ].map((f) => (
          <label
            className={`field ${f.name === "email" ? "field-full" : ""}`}
            key={f.name}
          >
            <span>
              {f.label}
              {f.name !== "email" ? " *" : ""}
            </span>
            <input
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.auto}
              maxLength={150}
              required={f.name !== "email"}
              aria-invalid={!!errors[f.name]}
              aria-describedby={
                errors[f.name] ? `inquiry-${f.name}-error` : undefined
              }
            />
            {errors[f.name] && (
              <small className="field-error" id={`inquiry-${f.name}-error`}>
                {errors[f.name]}
              </small>
            )}
          </label>
        ))}
        <label className="field">
          <span>Interested in</span>
          <select name="property" defaultValue={property || ""}>
            <option value="">Help me choose</option>
            {property && <option value={property}>{property}</option>}
            {categories.map((c) => (
              <option key={c.value}>{c.label}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Your budget</span>
          <select name="budget">
            <option value="">Let’s discuss</option>
            <option>Up to ₹50 lakh</option>
            <option>₹50 lakh – ₹1 crore</option>
            <option>Above ₹1 crore</option>
          </select>
        </label>
        <label className="field field-full">
          <span>Tell us a little more</span>
          <textarea
            name="message"
            rows={3}
            maxLength={2000}
            placeholder="Your plans, preferred location, or anything you’d like to ask…"
          />
        </label>
      </div>
      <p className="fine-print">
        We’ll prepare your inquiry for WhatsApp. Review it and press Send there
        to share your details with our team.
      </p>
      {prepared ? (
        <div className="form-ready" role="status">
          <CheckCircle2 size={20} />
          <div>
            <strong>Your message is ready.</strong>
            <p>Your inquiry has not been sent yet.</p>
            <a
              href={prepared}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-green"
            >
              Open WhatsApp to Send
            </a>
          </div>
        </div>
      ) : (
        <button type="submit" className="button button-green w-full">
          <MessageCircle size={17} />
          Prepare WhatsApp Inquiry
        </button>
      )}
    </form>
  );
}
