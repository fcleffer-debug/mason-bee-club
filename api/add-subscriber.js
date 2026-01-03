export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  try {
    const { email, source = "unknown" } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return new Response(
        JSON.stringify({ error: "Server misconfigured" }),
        { status: 500 }
      );
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Prefer": "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        email,
        source,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(
        JSON.stringify({ error: err }),
        { status: 400 }
      );
    }

    // TODO: send confirmation email here (next step)
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}

