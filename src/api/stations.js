// src/api/stations.js

/* ---------------- MOCK STATION DATA ---------------- */

const stations = [
  {
    id: "MBC-ALPHA-001",
    name: "Station Alpha",
    lifecycle: "active",
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
    lifecycle: "active",
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

/* ---------------- API FUNCTIONS ---------------- */

export async function getStations() {
  return Promise.resolve(stations);
}

export async function getStationById(id) {
  return Promise.resolve(stations.find((s) => s.id === id));
}

export async function updateStationLifecycle(id, lifecycle) {
  const station = stations.find((s) => s.id === id);
  if (station) station.lifecycle = lifecycle;
  return Promise.resolve(station);
}

