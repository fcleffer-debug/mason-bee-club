import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleJoin = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // 1️⃣ Save email to database
    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);


    if (error) {
      console.error("Supabase error:", error);
      setStatus("error");
      return;
    }

    // 2️⃣ Call Edge Function to send welcome email
    try {
      const res = await fetch(
        "https://wlbwsujxzaiigbjrjhfn.supabase.co/functions/v1/welcome-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Welcome email failed:", text);
        setStatus("error");
        return;
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
      return;
    }

    // 3️⃣ Success
    setStatus("success");
    setEmail("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>Join the Mason Bee Club 🐝</h1>
      <p>
        Join for free updates, newsletters, and Mason Bee Club announcements.
      </p>

      <form onSubmit={handleJoin} style={{ marginTop: "1.5rem" }}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "100%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
          }}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: "0.7rem 1.4rem",
            background: "#3a6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {status === "loading" ? "Joining..." : "Join the Club"}
        </button>
      </form>

      {status === "success" && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          🎉 You’re in! Check your email for a welcome message.
        </p>
      )}

      {status === "error" && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          ❌ Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
