import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { useStation } from "../../hooks/useStation";

export function StationSettings() {
  const { station, stationId, loading } = useStation();
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location_description: "",
    snapshot_url: "",
    camera_model: "",
    temp_alert_high: 95,
    temp_alert_low: 40,
    humidity_alert_low: 20,
  });

  // Populate form when station loads
  useEffect(() => {
    if (station) {
      setForm({
        name: station.name || "",
        location_description: station.location_description || "",
        snapshot_url: station.snapshot_url || "",
        camera_model: station.camera_model || "",
        temp_alert_high: station.temp_alert_high ?? 95,
        temp_alert_low: station.temp_alert_low ?? 40,
        humidity_alert_low: station.humidity_alert_low ?? 20,
      });
    }
  }, [station]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function save() {
    if (!stationId) return;
    setSaving(true);

    const { error } = await supabase
      .from("stations")
      .update(form)
      .eq("id", stationId);

    setSaving(false);

    if (error) {
      alert("Error saving settings: " + error.message);
    } else {
      alert("Settings saved.");
    }
  }

  if (loading) return <div className="p-6 text-gray-500">Loading…</div>;
  if (!station) return <div className="p-6">No station found.</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Station Settings</h1>

      {/* GENERAL */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <h2 className="text-xl font-semibold">General</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Station Name</label>
            <input
              className="w-full p-2 border rounded"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Location Description</label>
            <input
              className="w-full p-2 border rounded"
              value={form.location_description}
              onChange={(e) =>
                updateField("location_description", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* CAMERA */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <h2 className="text-xl font-semibold">Camera</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Snapshot URL</label>
            <input
              className="w-full p-2 border rounded"
              value={form.snapshot_url}
              onChange={(e) => updateField("snapshot_url", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Camera Model</label>
            <input
              className="w-full p-2 border rounded"
              value={form.camera_model}
              onChange={(e) => updateField("camera_model", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ALERTS */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <h2 className="text-xl font-semibold">Alerts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm text-gray-600">High Temp Alert (°F)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={form.temp_alert_high}
              onChange={(e) =>
                updateField("temp_alert_high", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Low Temp Alert (°F)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={form.temp_alert_low}
              onChange={(e) =>
                updateField("temp_alert_low", Number(e.target.value))
              }
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Low Humidity Alert (%)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={form.humidity_alert_low}
              onChange={(e) =>
                updateField("humidity_alert_low", Number(e.target.value))
              }
            />
          </div>
        </div>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={save}
        disabled={saving}
        className={`px-6 py-3 rounded-lg text-white ${
          saving ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {saving ? "Saving…" : "Save Settings"}
      </button>
    </div>
  );
}

