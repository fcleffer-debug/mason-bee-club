export default function MyStation() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">My Station</h1>

      <p className="text-gray-700 mb-4">
        This is your personal beehouse station. Later you’ll be able to update
        address, QR code linking, and camera feed here.
      </p>

      <div className="bg-white p-6 rounded-xl shadow border border-green-200">
        <h2 className="text-xl font-semibold text-green-700">Station Status</h2>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>• Connected to Bee Network: <strong>Yes</strong></li>
          <li>• Last Sync: 10 minutes ago</li>
          <li>• Cocoons Registered: 0 (dummy)</li>
          <li>• Hatchings: 0 (dummy)</li>
          <li>• Temperature Sensor: Online</li>
        </ul>
      </div>
    </div>
  );
}

