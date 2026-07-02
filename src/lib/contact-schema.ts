import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1).max(255),
  company: z.string().trim().min(1).max(255),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
