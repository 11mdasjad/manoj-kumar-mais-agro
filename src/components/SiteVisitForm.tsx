"use client";
import { useState } from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { properties } from "@/data/properties";
import {
  inquiryMessage,
  validateInquiry,
  todayInIndia,
  type Inquiry,
} from "@/lib/inquiry";
import { whatsappUrl } from "@/lib/site";
export default function SiteVisitForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as unknown as Inquiry;
    const issues = validateInquiry(data, true);
    setErrors(issues);
    if (Object.keys(issues).length) {
      e.currentTarget
        .querySelector<HTMLInputElement>(`[name="${Object.keys(issues)[0]}"]`)
        ?.focus();
      return;
    }
    setPrepared(whatsappUrl(inquiryMessage(data, true)));
  }
  const error = (name: string) =>
    errors[name] && (
      <small id={`visit-${name}-error`} className="field-error">
        {errors[name]}
      </small>
    );
  return (
    <form
      className="inquiry-form"
      onSubmit={submit}
      noValidate
      onChange={() => prepared && setPrepared("")}
    >
      <div className="form-grid">
        <label className="field">
          <span>Full name *</span>
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "visit-name-error" : undefined}
          />
          {error("name")}
        </label>
        <label className="field">
          <span>Phone number *</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={20}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "visit-phone-error" : undefined}
          />
          {error("phone")}
        </label>
        <label className="field field-full">
          <span>Preferred property *</span>
          <select
            name="property"
            required
            aria-invalid={!!errors.property}
            aria-describedby={
              errors.property ? "visit-property-error" : undefined
            }
          >
            <option value="">Choose a property</option>
            {properties.map((p) => (
              <option key={p.slug}>{p.title}</option>
            ))}
            <option>I’d like a recommendation</option>
          </select>
          {error("property")}
        </label>
        <label className="field">
          <span>Preferred date *</span>
          <input
            name="date"
            type="date"
            min={todayInIndia()}
            required
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "visit-date-error" : undefined}
          />
          {error("date")}
        </label>
        <label className="field">
          <span>Preferred time (IST) *</span>
          <select
            name="time"
            required
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "visit-time-error" : undefined}
          >
            <option value="">Choose a time</option>
            <option>9:00 AM – 11:00 AM</option>
            <option>11:00 AM – 1:00 PM</option>
            <option>2:00 PM – 4:00 PM</option>
            <option>4:00 PM – 6:00 PM</option>
          </select>
          {error("time")}
        </label>
        <label className="field field-full">
          <span>Anything else we should know?</span>
          <textarea
            name="message"
            rows={3}
            maxLength={2000}
            placeholder="Your questions or any special requests"
          />
        </label>
      </div>
      <p className="fine-print">
        Send your request in WhatsApp. Your visit is confirmed only when our
        team agrees the date and time with you.
      </p>
      {prepared ? (
        <div className="form-ready" role="status">
          <CheckCircle2 size={20} />
          <div>
            <strong>Your visit request is ready.</strong>
            <p>No visit has been booked yet.</p>
            <a
              className="button button-green"
              href={prepared}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open WhatsApp to Send
            </a>
          </div>
        </div>
      ) : (
        <button className="button button-green w-full" type="submit">
          <CalendarDays size={17} />
          Prepare Site Visit Request
        </button>
      )}
    </form>
  );
}
