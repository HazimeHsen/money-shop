"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // Change parameter name to formData
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  resend.emails.send({
    from: "A² Crypto <onboarding@resend.dev>",
    to: "asquaredcrypto@gmail.com",
    subject: "A² Crypto",
    reply_to: email,
    text: `name: ${name}\nmessage: ${message}`,
  });
};
