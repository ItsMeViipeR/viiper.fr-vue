import nodemailer from "nodemailer";
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const { email, message } = await readBody(event);

  if (!email || !message) {
    return { error: "Champs manquants" };
  }

  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Mailer" <mailer@viiper.fr>`,
      to: process.env.EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${email}`,
      text: message,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Error while sending email" };
  }
});
