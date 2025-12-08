import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const handleJoin = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // 1. Insert subscriber into Supabase
    const { error: dbError } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      setStatus("error");
      return;
    }

    // 2. Trigger welcome email through Edge API
    try {
      const response = await fetch("/api/supabase-email-handler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!result.success) {
        console.error("Email API Failure:", result.error);
        setStatus("error");
        return;
      }
    } catch (err) {
      console.error("API Error:", err);
      setStatus("error");
      return;
    }

    // 3. Show success
    setStatus("success");
    setEmail("");
  };

  // DEBUG: test Supabase connection on load
useEffect(() => {
  async function test() {
    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ email: "debug_test@masonbee.com" }]);

    console.log("DEBUG INSERT RESULT:", { data, error });
  }

  test();
}, []);

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

      {/* Status Messages */}
      {status === "success" && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          🎉 You’re in! Check your email for a welcome message.
        </p>
      )}

      {status === "error" && (
        <p style={{ marginTop: "1rem", color: "red" }}>
          ❌ Something went wrong — try again.
        </p>
      )}
    </div>
  );
}
