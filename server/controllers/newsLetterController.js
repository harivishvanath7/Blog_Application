import { transporter } from "../config/mailer.js";
import Subscriber from "../models/Subscriber.js";

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Aldready subscribed." });
    }

    const newSub = new Subscriber({ email });
    await newSub.save();

    res.status(201).json({ message: "Subscribed successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sendNewsLetter = async (req, res) => {
  try {
    const { title, content } = req.body;

    const subscribers = await Subscriber.find();

    const emails = subscribers.map((sub) => sub.email);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      bcc: emails,
      subject: title, // send to all
      html: content,
    });

    res.json({ message: "Newsletter sent!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { subscribe, sendNewsLetter };
