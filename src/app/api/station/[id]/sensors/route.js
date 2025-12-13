import { createSupabaseServerClient } from "../../../_lib/supabaseServer";

export async function GET(request, { params }) {
  const { id } = params;
  const supabase = createSupabaseServerClient();

  // 1. Fetch latest sensor reading
  const { data, error } = await supabase
    .from("sensor_data")
    .select("*")
    .eq("station_id", id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return new Response(
      JSON.stringify({ error: "Could not load sensor data." }),
      { status: 500 }
    );
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

