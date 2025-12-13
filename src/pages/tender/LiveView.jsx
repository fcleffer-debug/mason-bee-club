import { useEffect, useState, useRef } from "react";
import { useStation } from "../../hooks/useStation";

export function LiveView() {
  const { station, stationId, loading } = useStation();
  const [snapshotUrl, setSnapshotUrl] = useState(null);
  const [status, setStatus] = useState("idle");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!stationId) return;
    fetchSnapshot();

    if (autoRefresh) startAutoRefresh();

    return stopAutoRefresh;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stationId]);

  useEffect(() => {
    if (!stationId) return;

    if (autoRefresh) startAutoRefresh();
    else stopAutoRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefresh]);

  function startAutoRefresh() {
    stopAutoRefresh();
    intervalRef.current = setInterval(fetchSnapshot, 3000);
  }

  function stopAutoRefresh() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  async function fetchSnapshot() {
    if (!stationId) return;
    setStatus("loading");

    const url =
      station?.snapshot_url ||
      `/api/station/${stationId}/snapshot`; // mock endpoint

    try {
      const finalUrl = `${url}${url.includes("?") ? "&" : "?"}_t=${Date.now()}`;
      const res = await fetch(finalUrl, { cache: "no-store" });

      if (!res.ok) throw new Error("failed");

      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);

      if (snapshotUrl) URL.revokeObjectURL(snapshotUrl);

      setSnapshotUrl(objectUrl);
      setStatus("ok");
      setLastUpdated(new Date());
    } catch (err) {
      setStatus("error");
    }
  }

  function downloadSnapshot() {
    if (!snapshotUrl) return;

    const a = document.createElement("a");
    a.href = snapshotUrl;
    a.download = `${station?.name || "station"}-${Date.now()}.jpg`;
    a.click();
  }

  if (loading) return <div className="p-6">Loading station...</div>;

  if (!station)
    return (
      <div className="p-6">
        <h2 className="text-xl font-semibold">Live View</h2>
        <p>No station selected.</p>
      </div>
    );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Live View — {station.name}</h1>
          <p className="text-sm text-gray-600">
            Camera: {station.camera_model || "Unknown"}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={fetchSnapshot}
            className="px-3 py-2 bg-blue-600 text-white rounded"
          >
            Refresh
          </button>

          <button
            onClick={() => setAutoRefresh((s) => !s)}
            className={`px-3 py-2 rounded border ${
              autoRefresh ? "bg-green-600 text-white" : "bg-white"
            }`}
          >
            {autoRefresh ? "Auto-refresh: ON" : "Auto-refresh: OFF"}
          </button>

          <button
            onClick={downloadSnapshot}
            disabled={!snapshotUrl}
            className="px-3 py-2 bg-gray-800 text-white rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div className="bg-white p-4 rounded-xl shadow border">
        <div className="w-full h-[480px] bg-gray-100 flex items-center justify-center rounded">
          {status === "loading" && <div className="text-gray-500">Loading…</div>}
          {status === "error" && (
            <div className="text-red-600">Unable to load snapshot.</div>
          )}
          {status === "ok" && snapshotUrl && (
            <img
              src={snapshotUrl}
              alt="Live snapshot"
              className="max-h-full max-w-full rounded"
            />
          )}
        </div>

        <div className="mt-3 text-sm flex justify-between">
          <span>Last updated: {lastUpdated?.toLocaleString() || "—"}</span>
          <span>Status: {status}</span>
        </div>
      </div>
    </div>
  );
}

