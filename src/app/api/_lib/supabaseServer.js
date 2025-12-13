 // src/app/api/_lib/supabaseServer.js
import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client
 * Uses the SERVICE_ROLE key so we can:
 * - query any table
 * - enforce RLS manually (you will add owner checks)
 * - create firmware jobs, logs, etc.
 *
 * WARNING: This file must NEVER be imported by client components.
 */

export function createSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase env vars not set: SUPABASE_URL / SERVICE_ROLE_KEY");
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    }
  });
}

