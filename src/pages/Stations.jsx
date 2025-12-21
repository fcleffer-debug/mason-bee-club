import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import beeMarker from "../assets/bee-marker.png";

/* ---------------- MAP CONTROLLER ---------------- */
function MapController({ selectedStation }) {
  const map = useMap();

  useEffect(() => {
    if (selectedStation) {
      map.flyTo(selectedStation.location.coords, 14, {
        animate: true,
        duration: 1.2,
      });
    }
  }, [selectedStation, map]);

  return null;
}

/* ---------------- MARKER ICONS ---------------- */
const normalBeeIcon = new L.Icon({
  iconUrl: beeMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const highlightedBeeIcon = new L.Icon({
  iconUrl: beeMarker,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

/* ---------------- LIFECYCLE BADGE ---------------- */
function LifecycleBadge({ state }) {
  const styles = {
    draft: "bg-gray-200 text-gray-700",
    claimed: "bg-yellow-200 text-yellow-800",
    connected: "bg-blue-200 text-blue-800",
    active: "bg-green-200 text-green-800",
    paused: "bg-orange-200 text-orange-800",
    archived: "bg-red-200 text-red-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        styles[state] || "bg-gray-100 text-gray-600"
      }`}
    >
      {state.toUpperCase()}
    </span>
  );
}

/* ---------------- TEMP MOCK DATA ---------------- */
const MOCK_STATIONS = [
  {
    id: "MBC-ALPHA-001",
    name: "Station Alpha",
    lifecycle: "Demo",
    buildModel: "Alpha v1.2 (Redwood CNC)",

    status: {
      connection: "WiFi",
      online: true,
      lastSeen: "2025-04-12 14:37",
      firmware: "beeOS 0.9.4",
    },

    location: {
      county: "Sonoma County, CA",
      environment: "Backyard Garden",
      coords: [38.47779, -122.75111],
    },

    environmentData: {
      temperatureF: 68.4,
      humidityPct: 54,
      lightLevel: "Moderate",
    },

    nesting: {
      cocoons: 8,
      species: "Osmia lignaria",
      dateAdded: "2025-03-18",
      materials: ["Bamboo", "Redwood"],
      mudRoomStatus: "Moist",
    },

    activity: {
      score: 45,
      lastActivity: "2025-04-12 09:12",
      images: [],
    },
  },

  {
    id: "MBC-BETA-002",
    name: "Station Beta",
    lifecycle: "Demo",
    buildModel: "Beta v1.0 (Field Kit)",

    status: {
      connection: "Cellular",
      online: true,
      lastSeen: "2025-04-09 18:02",
      firmware: "beeOS 0.8.9",
    },

    location: {
      county: "Fresno County, CA",
      environment: "Orchard",
      coords: [36.80, -119.81],
    },

    environmentData: {
      temperatureF: 72.1,
      humidityPct: 41,
      lightLevel: "High",
    },

    nesting: {
      cocoons: 2,
      species: "Osmia lignaria",
      dateAdded: "2025-03-25",
      materials: ["Bamboo"],
      mudRoomStatus: "Dry",
    },

    activity: {
      score: 0,
      lastActivity: null,
      images: [],
    },
  },
];

/* ===================== PAGE ===================== */
export default function Stations() {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    // later: replace with getStations()
    setStations(MOCK_STATIONS);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold mb-6 text-green-900 text-center">
        Bee Stations
      </h1>

      {/* ---------------- MAP ---------------- */}
      <div
        className="w-full mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg"
        style={{ height: "350px", maxWidth: "1000px" }}
      >
        <MapContainer
          center={[36.787006, -119.80353]}
          zoom={12}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s) => (
            <Marker
              key={s.id}
              position={s.location.coords}
              icon={
                selectedStation?.id === s.id
                  ? highlightedBeeIcon
                  : normalBeeIcon
              }
              eventHandlers={{ click: () => setSelectedStation(s) }}
            >
              <Popup>
                <strong>{s.name}</strong>
                <br />
                {s.status.online ? "Online" : "Offline"} ·{" "}
                {s.status.connection}
              </Popup>
            </Marker>
          ))}

          <MapController selectedStation={selectedStation} />
        </MapContainer>
      </div>

      {/* ---------------- TABLE ---------------- */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow border border-green-200 overflow-hidden mb-8">
        <table className="w-full">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-3">Station</th>
              <th className="p-3">Status</th>
              <th className="p-3">Environment</th>
              <th className="p-3 text-center">Cocoons</th>
              <th className="p-3 text-center">Activity</th>
              <th className="p-3">Lifecycle</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((s) => (
              <tr
                key={s.id}
                onClick={() => setSelectedStation(s)}
                className="cursor-pointer border-t hover:bg-green-50"
              >
                <td className="p-3 font-medium text-green-800">{s.name}</td>
                <td className="p-3">
                  <span
                    className={
                      s.status.online ? "text-green-600" : "text-red-600"
                    }
                  >
                    {s.status.online ? "Online" : "Offline"}
                  </span>
                </td>
                <td className="p-3">{s.location.environment}</td>
                <td className="p-3 text-center">{s.nesting.cocoons}</td>
                <td className="p-3 text-center">{s.activity.score}</td>
                <td className="p-3">
                  <LifecycleBadge state={s.lifecycle} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------- DETAILS ---------------- */}
      {selectedStation && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            {selectedStation.name}
          </h2>

          <p><strong>Station ID:</strong> {selectedStation.id}</p>
          <p><strong>Build Model:</strong> {selectedStation.buildModel}</p>
          <p className="flex items-center gap-2">
            <strong>Lifecycle:</strong>
            <LifecycleBadge state={selectedStation.lifecycle} />
          </p>

          <hr className="my-4" />

          <p><strong>Status:</strong> {selectedStation.status.online ? "Online" : "Offline"}</p>
          <p><strong>Connection:</strong> {selectedStation.status.connection}</p>
          <p><strong>Last Seen:</strong> {selectedStation.status.lastSeen}</p>
          <p><strong>Firmware:</strong> {selectedStation.status.firmware}</p>

          <hr className="my-4" />

          <p><strong>Environment:</strong> {selectedStation.location.environment}</p>
          <p><strong>County:</strong> {selectedStation.location.county}</p>

          <hr className="my-4" />

          <p><strong>Temperature:</strong> {selectedStation.environmentData.temperatureF}°F</p>
          <p><strong>Humidity:</strong> {selectedStation.environmentData.humidityPct}%</p>
          <p><strong>Light:</strong> {selectedStation.environmentData.lightLevel}</p>

          <hr className="my-4" />

          <p><strong>Cocoons:</strong> {selectedStation.nesting.cocoons}</p>
          <p><strong>Species:</strong> {selectedStation.nesting.species}</p>
          <p><strong>Date Added:</strong> {selectedStation.nesting.dateAdded}</p>
          <p><strong>Nesting Materials:</strong> {selectedStation.nesting.materials.join(", ")}</p>
          <p><strong>Mud Room:</strong> {selectedStation.nesting.mudRoomStatus}</p>
        </div>
      )}
    </div>
  );
}
