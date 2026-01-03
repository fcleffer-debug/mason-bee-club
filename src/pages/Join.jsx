import { useState } from "react";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const handleJoin = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch(
        "https://wlbwsujxzaiigbjrjhfn.supabase.co/functions/v1/welcome-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result?.success) {
        console.error("Edge Function Error:", result);
        setStatus("error");
        return;
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Network / Fetch Error:", err);
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>Join the Mason Bee Club 🐝</h1>

      <p>
        Enter your email to join the beta! The club is early, but we’ll notify you
        as features launch and your bee data becomes available.
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
