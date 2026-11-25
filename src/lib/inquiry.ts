export interface Inquiry {
  name: string;
  phone: string;
  email?: string;
  property?: string;
  budget?: string;
  message?: string;
  date?: string;
  time?: string;
}
export function validateInquiry(
  data: Inquiry,
  visit = false,
): Record<string, string> {
  const errors: Record<string, string> = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your full name.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15)
    errors.phone = "Enter a valid phone number with 10–15 digits.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (visit) {
    if (!data.date || data.date < todayInIndia())
      errors.date = "Choose today or a future date.";
    if (!data.time) errors.time = "Choose your preferred time.";
    if (!data.property)
      errors.property = "Choose a property or ask for a recommendation.";
  }
  return errors;
}
export function todayInIndia() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
export function inquiryMessage(data: Inquiry, visit = false) {
  return [
    `Hello Mais Agro House, I would like to ${visit ? "request a site visit" : "inquire about a property"}.`,
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    data.email && `Email: ${data.email}`,
    data.property && `Property: ${data.property}`,
    data.budget && `Budget: ${data.budget}`,
    data.date && `Preferred date: ${data.date}`,
    data.time && `Preferred time (IST): ${data.time}`,
    data.message && `Message: ${data.message.trim()}`,
    visit && "Please confirm availability and the visit arrangements.",
  ]
    .filter(Boolean)
    .join("\n");
}
