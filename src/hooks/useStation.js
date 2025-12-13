import { useState, useEffect } from "react";

export function useStation(stationId = "demo-station") {
  const [data, setData] = useState({
    temperature: 78,
    humidity: 42,
    occupancy: 67,
    beenet_online: true,
    cpu: 22,
    lastUpdated: Date.now(),
    alerts: [
      { id: 1, type: "info", msg: "Station booted in demo mode." },
      { id: 2, type: "warning", msg: "Low nest emergence detected." }
    ],
    logs: [
      "2025-01-01 09:00:21 - Demo station initialized.",
      "2025-01-01 09:03:10 - Temperature sensor reading OK.",
      "2025-01-01 09:04:55 - BeeNet ping response: 89ms."
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() * 2 - 1),   // small drift
        humidity: prev.humidity + (Math.random() * 2 - 1),
        occupancy: prev.occupancy + (Math.random() * 1 - 0.5),
        cpu: prev.cpu + (Math.random() * 10 - 5),
        beenet_online: Math.random() > 0.05,  // 5% chance of offline blip
        lastUpdated: Date.now(),
        logs: [
          ...prev.logs.slice(-19),
          `${new Date().toISOString()} - Demo sensor tick: T=${prev.temperature.toFixed(
            1
          )} H=${prev.humidity.toFixed(1)}`
        ]
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { data };
}
