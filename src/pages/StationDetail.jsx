import { useParams, Link } from "react-router-dom";
import stations from "../data/stations.js";
import { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StationDetail() {
  const { id } = useParams();
  const station = stations.find((s) => s.id === Number(id));

  // Placeholder bee activity dataset
  const activityData = [
    { day: "Mon", activity: station.activityLevels?.mon || 12 },
    { day: "Tue", activity: station.activityLevels?.tue || 18 },
    { day: "Wed", activity: station.activityLevels?.wed || 14 },
    { day: "Thu", activity: station.activityLevels?.thu || 20 },
    { day: "Fri", activity: station.activityLevels?.fri || 15 },
    { day: "Sat", activity: station.activityLevels?.sat || 25 },
    { day: "Sun", activity: station.activityLevels?.sun || 30 },
  ];

  if (!station) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Station Not Found</h1>
        <Link to="/stations" className="text-green-700 underline">
          Back to Stations
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10">
      {/* ------------ HEADER -------------- */}
      <header>
        <h1 className="text-4xl font-bold text-green-800">{station.name}</h1>
        <p className="text-gray-700 mt-2">
          {station.address} — {station.envType || "Backyard Habitat"}
        </p>
      </header>

      {/* ------------ HARDWARE / BUILD SUMMARY -------------- */}
      <section className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Station Build & Hardware
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <p><strong>Build Type:</strong> {station.buildType || "DIY Kit"}</p>
          <p><strong>Serial Number:</strong> {station.serial || "MB-" + id}</p>
          <p><strong>Camera:</strong> {station.camera || "Wide-angle USB cam"}</p>
          <p><strong>Sensors:</strong> {station.sensors || "Temp / Humidity / Light"}</p>
          <p><strong>Firmware Version:</strong> {station.firmware || "1.0.0-beta"}</p>
        </div>

        <Link
          to="#"
          className="text-green-700 underline mt-3 inline-block"
        >
          📄 View Build Diagram (coming soon)
        </Link>
      </section>

      {/* ------------ ENVIRONMENT -------------- */}
      <section className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Environment & Weather
        </h2>

        <p className="text-gray-700">
          <strong>Environment Type:</strong> {station.envType || "Garden"}
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Current Conditions:</strong> {station.weather || "Sunny · 68°F · 45% humidity"}
        </p>
      </section>

      {/* ------------ BEE STATS -------------- */}
      <section className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Bee Activity & Stats
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-green-800">{station.tubes || 20}</p>
            <p className="text-gray-600">Tubes</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">{station.cocoons || 12}</p>
            <p className="text-gray-600">Cocoons</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">{station.hatchings || 5}</p>
            <p className="text-gray-600">Hatched</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-800">
              {station.visitors || 42}
            </p>
            <p className="text-gray-600">Visitors Today</p>
          </div>
        </div>
      </section>

      {/* ------------ MINI CHART -------------- */}
      <section className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Weekly Activity Chart
        </h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="activity" stroke="#166534" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ------------ VIDEO CLIPS -------------- */}
      <section className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Recent Activity Clips 🎥
        </h2>
        <p className="text-gray-700 mb-3">
          Video uploads coming soon — after camera integration.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
          <div className="bg-gray-300 h-24 rounded-lg" />
          <div className="bg-gray-300 h-24 rounded-lg" />
          <div className="bg-gray-300 h-24 rounded-lg" />
          <div className="bg-gray-300 h-24 rounded-lg" />
        </div>
      </section>

      {/* ------------ CONTACT TENDER -------------- */}
      <section className="text-center">
        <Link
          to="#"
          className="px-8 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800"
        >
          Contact Bee Tender ✉️
        </Link>
      </section>

      <div className="text-center mt-8">
        <Link to="/stations" className="text-gray-600 underline">
          ← Back to all stations
        </Link>
      </div>
    </div>
  );
}
