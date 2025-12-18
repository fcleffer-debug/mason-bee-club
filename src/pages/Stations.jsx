import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom Bee Marker Icons
const normalBeeIcon = new L.Icon({
  iconUrl: "/bee-marker.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
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
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((s) => (
            <Marker
              key={s.id}
              position={s.coords}
              icon={normalBeeIcon}
            >
              <Popup>
                <div className="text-sm">
                  <strong>{s.name}</strong>
                  <br />
                  Status: {s.status}
                  <br />
                  Cocoons: {s.cocoons}
                  <br />
                  Activity: {s.activity}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* STATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stations.map((s) => (
          <div
            key={s.id}
            className="bg-white shadow-md rounded-xl p-6 border border-green-200"
          >
            <h2 className="text-xl font-semibold text-green-800">
              {s.name}
            </h2>

            <p className="mt-2">
              <strong>Status:</strong>{" "}
              <span
                className={
                  s.status === "Online"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {s.status}
              </span>
            </p>

            <p>
              <strong>Environment:</strong> {s.environment}
            </p>
            <p>
              <strong>Cocoons:</strong> {s.cocoons}
            </p>
            <p>
              <strong>Activity Score:</strong> {s.activity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
