import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function TestSupabase() {
  const [message, setMessage] = useState("Testing...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function runTest() {
      // Try a simple query — get rows from stations table
      const { data, error } = await supabase
        .from("stations")
        .select("*")
        .limit(1);

      if (error) {
        setMessage("❌ ERROR: " + error.message);
      } else {
        setMessage("✅ Supabase connected!\nReturned rows: " + JSON.stringify(data));
      }

      setLoading(false);
    }

    runTest();
  }, []);

  return (
    <div className="p-10 text-lg">
      <h1 className="text-3xl font-bold mb-4">Supabase Connection Test</h1>

      {loading ? (
        <p>Running test…</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded">{message}</pre>
      )}
    </div>
  );
}

