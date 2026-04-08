import { useState } from "react";
import API from "../api/api.js";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      await API.post("/newsletter/subscribe", { email });
      setMessage("Subscribed successfully ✅");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col gap-4">

      {/* INPUT */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 rounded-xl bg-gray-300 text-black outline-none"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Subscribe
      </button>

      {/* MESSAGE */}
      {message && (
        <p className="text-sm text-gray-300">{message}</p>
      )}

    </form>
  );
}

export default Subscribe;