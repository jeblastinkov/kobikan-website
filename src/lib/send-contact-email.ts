import { Resend } from "resend";

import type { ContactFormData } from "./contact-schema";

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function parseContactRecipients(value: string): string[] {
  const emails = value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (emails.length === 0) {
    throw new Error("CONTACT_TO_EMAIL must include at least one email address");
  }

  return emails;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const apiKey = requireEnv("RESEND_API_KEY");
  const from = requireEnv("RESEND_FROM_EMAIL");
  const to = parseContactRecipients(requireEnv("CONTACT_TO_EMAIL"));

  const resend = new Resend(apiKey);

  const phone = data.phone?.trim() || "—";
  const message = data.message?.trim() || "—";

  const html = `
    <h2>New KobiKan demo request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `.trim();

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `KobiKan demo request — ${data.name} (${data.company})`,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }
}
