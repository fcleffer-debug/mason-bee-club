export default function ConnectionStatus() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Connection Status
      </h1>

      <p className="text-gray-700 mb-4">
        This page will show whether your bee house sensors, camera, and QR
        activation are connected to the Bee Network.
      </p>

      <div className="bg-white p-6 rounded-xl shadow border border-green-200">
        <h2 className="text-xl font-semibold text-green-700">Network Status</h2>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Connected: <strong>Yes (dummy)</strong></li>
          <li>• Last Check-In: 5 minutes ago</li>
          <li>• Camera Feed: Online (dummy)</li>
          <li>• Sensor Hub: Active</li>
        </ul>
      </div>
    </div>
  );
}

