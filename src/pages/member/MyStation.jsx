 import { stations } from "../../data/stations.js";

export default function MyStation() {
  const myStation = stations[0];  // placeholder until login system

  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        {myStation.name}
      </h1>

      <p className="text-gray-700">
        <strong>Address:</strong> {myStation.address}
      </p>

      <p className="text-gray-700 mt-2">
        <strong>Activity:</strong> {myStation.activity}
      </p>

      <div className="mt-6 p-4 bg-white rounded-xl shadow">
        <h2 className="text-xl font-bold text-green-700">Manual Input</h2>
        <p className="text-gray-600 mt-2">Add observations here (coming soon)</p>
      </div>
    </div>
  );
}

