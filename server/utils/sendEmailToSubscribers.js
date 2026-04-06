import Subscriber from "../models/Subscriber.js";
import { transporter } from "../config/mailer.js";

export const sendEmailToSubscribers = async (title, content) => {
  const subscribers = await Subscriber.find();
  const emails = subscribers.map((sub) => sub.email);

  if (emails.length === 0) return;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    bcc: emails,
    subject: title,
    html: content,
  });
};
