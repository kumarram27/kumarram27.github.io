import { z } from "zod";
import { ContactFormSchema } from "./schemas";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  // On static export (GitHub Pages), open mail client with prefilled details
  if (typeof window !== "undefined") {
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:kumar27.dev@gmail.com?subject=${subject}&body=${body}`;
  }

  return { success: true };
}
