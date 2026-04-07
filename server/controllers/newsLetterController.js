import { transporter } from "../config/mailer.js";
import Subscriber from "../models/Subscriber.js";
import crypto from "crypto";

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Aldready subscribed." });
    }

    // Create token for unsubscribe
    const token = crypto.randomBytes(32).toString("hex");

    const newSub = new Subscriber({
      email,
      unsubscribeToken: token,
    });

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

const unsubscribe = async (req, res) => {
  try {
    const { token } = req.params;

    const subscriber = await Subscriber.findOne({ unsubscribeToken: token });

    if (!subscriber) {
      return res.status(404).send("Invalid unsubscribe link.");
    }
    await Subscriber.deleteOne({ _id: subscriber._id });

    res.send("You have been unsubscribed successfully.");
  } catch (error) {
    res.status(500).send("Error Unsubscribing.");
  }
};

export { subscribe, sendNewsLetter, unsubscribe };
