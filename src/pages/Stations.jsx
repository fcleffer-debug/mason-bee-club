import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import stations from "../data/stations";

// Custom bee icon
const beeIcon = new L.Icon({
  iconUrl: "/assets/mason-bee-black.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Stations() {
  // Auto-center based on station average
  const avgLat = stations.reduce((s, x) => s + x.lat, 0) / stations.length;
  const avgLng = stations.reduce((s, x) => s + x.lng, 0) / stations.length;

  return (
    <div className="p-6 space-y-8">

      {/* ---------- Map Section ---------- */}
      <section className="h-[500px] rounded-2xl overflow-hidden shadow-lg border border-green-300">
        <MapContainer
          center={[avgLat, avgLng]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((station) => (
            <Marker
              key={station.id}
              position={[station.lat, station.lng]}
              icon={beeIcon}
            >
              <Tooltip direction="top">
                <strong>{station.name}</strong>
                <br />
                {station.status === "online" ? "🟢 Online" : "🔴 Offline"}
              </Tooltip>

              <Popup>
                <div>
                  <h3 className="font-semibold mb-1">{station.name}</h3>
                  <p className="text-sm mb-2">
                    <strong>Status:</strong> {station.status}
                  </p>
                  <Link
                    to={`/stations/${station.id}`}
                    className="text-green-700 underline"
                  >
                    → View Details
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {/* ---------- Station Cards Section ---------- */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stations.map((s) => (
          <div
            key={s.id}
            className="bg-white shadow-md border border-green-200 rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-800">
              {s.name}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              <strong>Status:</strong>{" "}
              {s.status === "online" ? "🟢 Online" : "🔴 Offline"}
            </p>

            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {s.address}
            </p>

            <div className="mt-3 text-sm text-gray-700">
              <p>🐝 Cocoons: {s.cocoons}</p>
              <p>🌱 Activity: {s.activity}</p>
            </div>

            <Link
              to={`/stations/${s.id}`}
              className="inline-block mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
            >
              View Details
            </Link>
          </div>
        ))}
      </section>

    </div>
  );
}
