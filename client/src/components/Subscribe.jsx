import { useState } from "react";
import API from "../api/api.js";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      await API.post("/newsletter/subscribe", { email });
      alert("Subscribed!!");
      setEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">
          📩 Subscribe to Newsletter
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Get latest blogs directly in your inbox
        </p>

        <div className="flex gap-2">
          <input
            type="email"
            className="border p-2 flex-1 rounded-lg"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleSubscribe}
            className="bg-primary text-white px-4 rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
