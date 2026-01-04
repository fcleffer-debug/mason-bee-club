import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const handleJoin = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { error } = await supabase
      .from("subscribers")
      .upsert([{ email }], { onConflict: "email" });

    if (error) {
      console.error("Supabase error:", error);
      setStatus("error");
      return;
    }

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
          🎉 You’re in! We’ll be in touch soon.
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
