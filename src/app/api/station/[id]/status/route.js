 // src/app/api/station/[id]/status/route.js
import { createSupabaseServerClient } from "@/app/api/_lib/supabaseServer";

export async function GET(request, { params }) {
  const { id } = params;
  const supabase = createSupabaseServerClient();

  // TODO: Add auth check so a user can only load their own station
  // Example:
  // const { data: { user } } = await supabase.auth.getUser();
  // Verify user owns the station…

  // Query latest beenet_status row
  const { data, error } = await supabase
    .from("beenet_status")
    .select("*")
    .eq("station_id", id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

