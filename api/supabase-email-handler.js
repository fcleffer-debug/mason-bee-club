import { createClient } from "@supabase/supabase-js";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // --- Connect to Supabase using SERVICE KEY (server-only) ---
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY  // MUST be service key
    );

    // --- Insert subscriber row ---
    const { error: dbError } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (dbError) {
      console.error("DB ERROR:", dbError);
      return new Response(JSON.stringify({ error: dbError.message }), {
        status: 500,
      });
    }

    // --- Send confirmation email via EmailJS ---
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: { user_email: email },
      }),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("API ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
