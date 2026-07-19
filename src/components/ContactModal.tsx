import { useEffect, useState, type FormEvent } from "react";
import type { Dict } from "@/lib/i18n";

export function ContactModal({
  form,
  successLinkLabel,
  onClose,
}: {
  form: Dict["form"];
  successLinkLabel: string;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone") ?? "",
          message: formData.get("message") ?? "",
        }),
      });

      if (!response.ok) {
        setError(form.error);
        return;
      }

      setSent(true);
    } catch {
      setError(form.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[color:var(--color-border)]">
          <h3 className="font-semibold text-lg">{form.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[color:var(--color-neutral-gray)] hover:text-[color:var(--color-dark)] text-2xl leading-none"
          >
            ×
          </button>
        </div>
        {sent ? (
          <div className="p-8 text-center">
            <div className="text-3xl">✓</div>
            <p className="mt-3 text-[color:var(--color-dark)]">{form.success}</p>
            <button
              onClick={onClose}
              className="mt-6 text-sm text-[color:var(--color-brand)] font-medium"
            >
              {successLinkLabel} →
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-6 space-y-3">
            <Field name="name" label={form.name} required disabled={submitting} />
            <Field name="company" label={form.company} required disabled={submitting} />
            <Field name="email" label={form.email} type="email" required disabled={submitting} />
            <Field name="phone" label={form.phone} type="tel" disabled={submitting} />
            <Field name="message" label={form.message} textarea disabled={submitting} />
            {error && (
              <p className="text-sm text-[color:var(--color-brand)]" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 rounded-md bg-[color:var(--color-brand)] text-white py-3 font-semibold hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? form.submitting : form.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  textarea,
  disabled,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  disabled?: boolean;
}) {
  const cls =
    "mt-1 w-full rounded-md border border-[color:var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/20 disabled:opacity-60 disabled:cursor-not-allowed";
  return (
    <label className="block">
      <span className="text-xs font-medium text-[color:var(--color-dark)]">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={3}
          maxLength={1000}
          disabled={disabled}
          className={cls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          maxLength={255}
          disabled={disabled}
          className={cls}
        />
      )}
    </label>
  );
}
