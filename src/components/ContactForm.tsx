import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Icon from "./Icon";
import { SITE } from "@/config/site";
import { SERVICES } from "@/data/content";
import { waLink } from "@/lib/whatsapp";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  quantity: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  quantity: "",
  message: "",
};

export function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.phone.trim() && !/^\+?[0-9\s()-]{8,20}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!values.service) errors.service = "Please select a service.";
  if (values.message.trim().length < 10) errors.message = "Please describe your project (at least 10 characters).";
  return errors;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  };

  const buildSummary = () =>
    [
      `Hello, I would like to request a quote.`,
      `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      `Email: ${values.email}`,
      values.phone && `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      values.quantity && `Estimated quantity: ${values.quantity}`,
      `Project details: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAttempted(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    if (!SITE.formEndpoint) {
      // No backend configured: show success and let the customer send via WhatsApp.
      setStatus("success");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setAttempted(false);
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="animate-fade-up rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-extrabold text-navy-900">Thank you, {values.name || "friend"}!</h3>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Your inquiry has been received. Our team will review your project and reply to {values.email || "your email"}
          {" "}shortly. For the fastest response, you can also send the details on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink(buildSummary())} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            <Icon name="whatsapp" className="h-5 w-5" />
            Send Details on WhatsApp
          </a>
          <button type="button" onClick={reset} className="btn btn-line">
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  const inputClass = (field: keyof FormValues) => `field ${errors[field] ? "field-error" : ""}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Request a quote">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name *" error={errors.name} htmlFor="name">
          <input id="name" name="name" value={values.name} onChange={handleChange} className={inputClass("name")} placeholder="Your full name" autoComplete="name" aria-invalid={!!errors.name} />
        </Field>
        <Field label="Company / Brand" htmlFor="company">
          <input id="company" name="company" value={values.company} onChange={handleChange} className={inputClass("company")} placeholder="Company or brand name" autoComplete="organization" />
        </Field>
        <Field label="Email *" error={errors.email} htmlFor="email">
          <input id="email" type="email" name="email" value={values.email} onChange={handleChange} className={inputClass("email")} placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email} />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone} htmlFor="phone">
          <input id="phone" type="tel" name="phone" value={values.phone} onChange={handleChange} className={inputClass("phone")} placeholder="+62 8xx-xxxx-xxxx" autoComplete="tel" aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Service Needed *" error={errors.service} htmlFor="service">
          <select id="service" name="service" value={values.service} onChange={handleChange} className={inputClass("service")} aria-invalid={!!errors.service}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Estimated Quantity" htmlFor="quantity">
          <input id="quantity" name="quantity" value={values.quantity} onChange={handleChange} className={inputClass("quantity")} placeholder="e.g. 5,000 pcs" />
        </Field>
      </div>

      <Field label="Project Details *" error={errors.message} htmlFor="message">
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange} className={`${inputClass("message")} resize-y`} placeholder="Tell us about your product, size, colours, materials and timeline." aria-invalid={!!errors.message} />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <Icon name="alert" className="h-4 w-4 shrink-0" />
          Something went wrong while sending. Please try again or contact us on WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">* Required fields. We respect your privacy and never share your details.</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
          {status === "sending" ? "Sending..." : "Send Inquiry"}
          {status !== "sending" && <Icon name="arrow" className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
