import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const handleJoin = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    /* -------------------------------------------------
       1. Insert or update subscriber (SOURCE OF TRUTH)
    -------------------------------------------------- */
    const { error: dbError } = await supabase
      .from("subscribers")
      .upsert(
        [{ email }],
        { onConflict: "email" }
      );

    if (dbError) {
      console.error("Supabase insert failed:", dbError);
      setStatus("error");
      return;
    }

    /* -------------------------------------------------
       2. Fire-and-forget welcome email (NON-BLOCKING)
    -------------------------------------------------- */
    fetch(
      "https://wlbwsujxzaiigbjrjhfn.supabase.co/functions/v1/welcome-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      }
    ).catch((err) => {
      // Important: log but DO NOT fail the UI
      console.warn("Welcome email failed (non-blocking):", err);
    });

    /* -------------------------------------------------
       3. Success UI
    -------------------------------------------------- */
    setStatus("success");
    setEmail("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>Join the Mason Bee Club 🐝</h1>

      <p>
        Enter your email to join the beta! The club is early, but we’ll notify
        you as features launch and your bee data becomes available.
      </p>

      <form onSubmit={handleJoin} style={{ marginTop: "1.5rem" }}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          style={{
            padding: "0.6rem",
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
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Joining..." : "Join the Club"}
        </button>
      </form>

      {/* Status Messages */}
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
