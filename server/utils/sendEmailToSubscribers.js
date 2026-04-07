import Subscriber from "../models/Subscriber.js";
import { transporter } from "../config/mailer.js";
import { generateEmailTemplate } from "./emailTemplate.js";

export const sendEmailToSubscribers = async (title, content, slug) => {
  const subscribers = await Subscriber.find();
  const emails = subscribers.map((sub) => sub.email);

  if (emails.length === 0) return;

  for (const sub of subscribers) {
    const html = generateEmailTemplate(
      title,
      content,
      slug,
      sub.unsubscribeToken
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: sub.email,
      subject: title,
      html,
    });
  }
};
