import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import stations from "../data/stations";

// --- Custom bee marker icon ---
import BeeIconImg from "../assets/mason-bee-tiny.png";

const beeIcon = new L.Icon({
  iconUrl: BeeIconImg,
  iconSize: [40, 40],   // adjust as needed
  iconAnchor: [20, 40], // centers the tip
  popupAnchor: [0, -40]
});

// --- Auto-calc map center based on station coordinates ---
function getCenter() {
  if (!stations || stations.length === 0) {
    return [47.6062, -122.3321]; // fallback to Seattle
  }

  const avgLat =
    stations.reduce((sum, s) => sum + s.lat, 0) / stations.length;
  const avgLng =
    stations.reduce((sum, s) => sum + s.lng, 0) / stations.length;

  return [avgLat, avgLng];
}

export default function StationMap() {
  const center = getCenter();

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Render all bee stations */}
        {stations
         .filter(s => s.lat && s.lng)   // prevents undefined errors
         .map((station) => (

          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            icon={beeIcon}
          >
            {/* Hover tooltip */}
            <Tooltip direction="top" offset={[0, -30]} opacity={0.9}>
              <strong>{station.name}</strong>
              <br />
              {station.status === "online" ? "🟢 Online" : "🔴 Offline"}
            </Tooltip>

            {/* Click popup */}
            <Popup>
              <div style={{ minWidth: "160px" }}>
                <h4 style={{ margin: "0 0 6px" }}>{station.name}</h4>
                <p style={{ margin: 0 }}>
                  <strong>Status:</strong> {station.status}
                  <br />
                  <strong>Cocoons:</strong> {station.cocoons}
                  <br />
                  <strong>Hatchings:</strong> {station.hatchings}
                  <br />
                  <strong>Visitors:</strong> {station.visitors}
                </p>
                <Link
                  to={`/stations/${station.id}`}
                  style={{ display: "inline-block", marginTop: "10px" }}
                >
                  → View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
