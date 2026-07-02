import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { contactFormSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/send-contact-email";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const parsed = contactFormSchema.safeParse(body);

          if (!parsed.success) {
            return Response.json(
              { error: "Invalid form data", details: parsed.error.flatten() },
              { status: 400 },
            );
          }

          await sendContactEmail(parsed.data);
          return Response.json({ ok: true });
        } catch (err) {
          console.error("Contact form error:", err);
          return Response.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 },
          );
        }
      },
    },
  },
});
