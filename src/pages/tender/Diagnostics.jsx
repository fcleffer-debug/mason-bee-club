import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useStation } from "../../hooks/useStation";

export function Diagnostics() {
  const { station, stationId, loading } = useStation();
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState(null);

  // Fetch beenet_status
  async function loadStatus() {
    if (!stationId) return;

    const { data, error } = await supabase
      .from("beenet_status")
      .select("*")
      .eq("station_id", stationId)
      .order("last_updated", { ascending: false })
      .limit(1);

    if (!error) setStatus(data[0] || null);
  }

  // Fetch logs
  async function loadLogs() {
    if (!stationId) return;

    const { data, error } = await supabase
      .from("beenet_logs")
      .select("*")
      .eq("station_id", stationId)
      .order("timestamp", { ascending: false })
      .limit(50);

    if (!error) setLogs(data || []);
  }

  useEffect(() => {
    loadStatus();
    loadLogs();
    const interval = setInterval(() => {
      loadStatus();
      loadLogs();
    }, 5000);
    return () => clearInterval(interval);
  }, [stationId]);

  if (loading) return <div className="p-6 text-gray-500">Loading…</div>;
  if (!station) return <div className="p-6">No station found.</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Diagnostics</h1>

      {/* SYSTEM STATUS */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-3">
        <h2 className="text-xl font-semibold">System Status</h2>

        {status ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>BeeNet Connected:</strong>{" "}
              {status.bee_connected ? "Yes" : "No"}
            </div>
            <div>
              <strong>Last Updated:</strong>{" "}
              {new Date(status.last_updated).toLocaleString()}
            </div>
            <div>
              <strong>WiFi Signal:</strong> {status.wifi_signal}%
            </div>
            <div>
              <strong>Storage Free:</strong> {status.storage_free} MB
            </div>
            <div>
              <strong>CPU Temp:</strong> {status.cpu_temp} °C
            </div>
            <div>
              <strong>Uptime:</strong> {status.uptime_minutes} min
            </div>
          </div>
        ) : (
          <div>No status records yet.</div>
        )}
      </div>

      {/* RECENT LOGS */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold mb-3">Recent Logs</h2>

        <div className="max-h-80 overflow-y-auto space-y-2 text-sm">
          {logs.length === 0 ? (
            <div>No logs available.</div>
          ) : (
            logs.map((log) => (
              <div
                key={log.id}
                className="border p-2 rounded bg-gray-50 text-xs"
              >
                <div className="font-mono text-gray-700">{log.message}</div>
                <div className="text-gray-500">
                  {new Date(log.timestamp).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

