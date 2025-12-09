import { useParams, Link } from "react-router-dom";
import stations from "../data/stations.js";

export default function StationDetail() {
  const { id } = useParams();

  // Support numeric IDs and string slugs (e.g., "alpha")
  const station = stations.find((s) =>
    String(s.id).toLowerCase() === String(id).toLowerCase()
  );

  if (!station) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">
          Station Not Found
        </h1>
        <Link to="/stations" className="text-green-700 underline">
          Back to Stations
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        {station.name} — Details
      </h1>

      {/* Location */}
      <div className="bg-white rounded-2xl shadow p-6 border border-green-200 mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          Location
        </h2>
        <p><strong>Address:</strong> {station.address}</p>
        <p><strong>Latitude:</strong> {station.lat}</p>
        <p><strong>Longitude:</strong> {station.lng}</p>
      </div>

      {/* Bee Stats */}
      <div className="bg-white rounded-2xl shadow p-6 border border-green-200 mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Bee Statistics
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Tubes:</strong> {station.tubes}</li>
          <li><strong>Activity:</strong> {station.activity}</li>
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-white rounded-2xl shadow p-6 border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Tools
        </h2>

        <a
          href={station.cameraUrl || "#"}
          className="text-green-700 underline"
        >
          📡 Live Stream (coming soon)
        </a>

        <div className="mt-6">
          <Link to="/stations" className="text-gray-600 underline">
            ← Back to all stations
          </Link>
        </div>
      </div>
    </div>
  );
}
