import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import beeMarker from "../assets/bee-marker.png";


// Custom Bee Marker Icons
const normalBeeIcon = new L.Icon({
  iconUrl: beeMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const highlightedBeeIcon = new L.Icon({
  iconUrl: beeMarker,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});


// TEMP — Your station data
const stations = [
  {
    id: "alpha",
    name: "Station Alpha",
    status: "Online",
    coords: [36.787006, -119.80353],
    cocoons: 8,
    activity: 45,
    environment: "Backyard Garden",
  },
  {
    id: "beta",
    name: "Station Beta",
    status: "Offline",
    coords: [36.8, -119.81],
    cocoons: 2,
    activity: 0,
    environment: "Orchard",
  },
];

export default function Stations() {
  const [selectedStation, setSelectedStation] = useState(null);
  const mapRef = useRef(null);

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold mb-6 text-green-900 text-center">
        Bee Stations
      </h1>

      {/* MAP CONTAINER */}
      <div
        className="w-full mx-auto mb-10 rounded-2xl overflow-hidden shadow-lg"
        style={{ height: "350px", maxWidth: "1000px" }}
      >
        <MapContainer
          center={[36.787006, -119.80353]}
          zoom={12}
          className="w-full h-full"
          whenCreated={(map) => (mapRef.current = map)}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s) => (
            <Marker
              key={s.id}
              position={s.coords}
              icon={selectedStation?.id === s.id ? highlightedBeeIcon : normalBeeIcon}
              eventHandlers={{
                click: () => {
                  setSelectedStation(s);
                  mapRef.current?.setView(s.coords, 14, { animate: true });
                },
              }}
            >
              <Popup>
                <div className="text-sm">
                  <strong>{s.name}</strong><br />
                  Status: {s.status}<br />
                  Cocoons: {s.cocoons}<br />
                  Activity: {s.activity}
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>

      {/* STATION TABLE */}
      <div className="max-w-4xl mx-auto mb-6 bg-white rounded-xl shadow border border-green-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="p-3">Station</th>
              <th className="p-3">Status</th>
              <th className="p-3">Environment</th>
              <th className="p-3 text-center">Cocoons</th>
              <th className="p-3 text-center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {stations.map((s) => {
              const isSelected = selectedStation?.id === s.id;

              return (
                <tr
                  key={s.id}
                  onClick={() => {
                    setSelectedStation(s);
                    mapRef.current?.setView(s.coords, 14, { animate: true });
                  }}
                  className={`cursor-pointer border-t hover:bg-green-50 ${
                    isSelected ? "bg-green-50 ring-1 ring-green-300" : ""
                  }`}
                >
                  <td className="p-3 font-medium text-green-800">{s.name}</td>
                  <td className="p-3">
                    <span
                      className={
                        s.status === "Online"
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="p-3">{s.environment}</td>
                  <td className="p-3 text-center">{s.cocoons}</td>
                  <td className="p-3 text-center">{s.activity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      {/* SELECTED STATION DETAILS */}
      {selectedStation && (
        <div className="max-w-4xl mx-auto mb-6 bg-white p-4 rounded-xl shadow border border-green-200">
          <h2 className="text-xl font-semibold text-green-800">
            {selectedStation.name}
          </h2>
          <p>Status: {selectedStation.status}</p>
          <p>Environment: {selectedStation.environment}</p>
          <p>Cocoons: {selectedStation.cocoons}</p>
          <p>Activity: {selectedStation.activity}</p>
        </div>
      )}



    </div>
  );
}
