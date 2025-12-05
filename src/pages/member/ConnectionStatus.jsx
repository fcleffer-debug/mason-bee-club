export default function ConnectionStatus() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Network Status
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>🔌 Connection: <strong>Online</strong></p>
        <p>📡 Last Sync: 2 minutes ago</p>
        <p>🧠 Firmware: 1.0.2-beta</p>
        <p>📸 Camera: Online</p>
        <p>🌡 Temp Sensor: Connected</p>
      </div>
    </div>
  );
}

