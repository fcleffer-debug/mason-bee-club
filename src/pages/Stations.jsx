import StationMap from "../components/StationMap.jsx";
import stations from "../data/stations.js";
import { Link } from "react-router-dom";

export default function Stations() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Your Bee Stations</h1>

      <div className="mb-10">
        <StationMap stations={stations} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl p-6 shadow border border-green-200"
          >
            <h2 className="text-2xl font-bold text-green-700">{s.name}</h2>
            <p className="text-gray-600">Address: {s.address}</p>
            <p className="text-gray-600 mt-1">Activity: {s.activity}</p>

            <Link
              to={`/station/${s.id}`}
              className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
