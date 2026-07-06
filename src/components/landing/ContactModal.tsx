import { useEffect, useState, type FormEvent } from "react";
import type { T } from "@/lib/i18n";

export function ContactModal({ t, onClose }: { t: typeof T.sk; onClose: () => void }) {
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

    const form = e.currentTarget;
    const formData = new FormData(form);

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
        setError(t.form.error);
        return;
      }

      setSent(true);
    } catch {
      setError(t.form.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      data-lenis-prevent
    >
      <div
        className="w-full max-w-lg overflow-hidden border border-white/12 bg-[color:var(--color-graphite)] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-semibold tracking-tight">{t.form.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-2xl leading-none text-white/40 hover:text-white"
          >
            ×
          </button>
        </div>
        {sent ? (
          <div className="p-8 text-center">
            <div className="font-mono text-2xl text-[color:var(--color-brand)]">✓</div>
            <p className="mt-3 text-white/85">{t.form.success}</p>
            <button
              onClick={onClose}
              className="mt-6 text-sm font-medium text-[color:var(--color-brand)]"
            >
              {t.nav.contact} →
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3 p-6">
            <Field name="name" label={t.form.name} required disabled={submitting} />
            <Field name="company" label={t.form.company} required disabled={submitting} />
            <Field name="email" label={t.form.email} type="email" required disabled={submitting} />
            <Field name="phone" label={t.form.phone} type="tel" disabled={submitting} />
            <Field name="message" label={t.form.message} textarea disabled={submitting} />
            {error && (
              <p className="text-sm text-[color:var(--color-brand)]" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full bg-[color:var(--color-brand)] py-3 font-semibold text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? t.form.submitting : t.form.submit}
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
    "mt-1 w-full border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[color:var(--color-brand)] focus:ring-2 focus:ring-[color:var(--color-brand)]/25 disabled:opacity-60 disabled:cursor-not-allowed";
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
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
