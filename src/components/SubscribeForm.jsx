import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase() });

    if (error) {
      console.log(error);
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email to join the Beta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="bg-green-700 text-white p-3 rounded-lg hover:bg-green-800"
        >
          Join the Beta
        </button>
      </form>

      {status === "loading" && (
        <p className="text-gray-700 mt-3">Submitting…</p>
      )}

      {status === "success" && (
        <p className="text-green-700 font-semibold mt-3">
          🎉 You're on the list! We’ll notify you as features go live.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-semibold mt-3">
          That email is already subscribed or invalid.
        </p>
      )}
    </div>
  );
}

