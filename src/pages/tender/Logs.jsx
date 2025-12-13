export function Logs() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Activity Logs</h1>

      <div className="bg-white shadow rounded-xl p-6 border border-green-200">
        <p className="text-gray-700">
          Your Bee Station logs will appear here soon — including:
        </p>

        <ul className="list-disc ml-6 mt-3 text-gray-700">
          <li>Bee-Net heartbeat pings</li>
          <li>Firmware update logs</li>
          <li>Camera upload events</li>
          <li>System warnings/errors</li>
        </ul>

        <p className="mt-4 text-gray-600">
          (This is a placeholder until the API is connected.)
        </p>
      </div>
    </div>
  );
}

