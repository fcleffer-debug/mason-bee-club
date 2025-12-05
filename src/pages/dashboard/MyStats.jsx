export default function MyStats() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">My Stats</h1>

      <p className="text-gray-700 mb-6">
        These are your personal bee station statistics. Once sensors and data
        collection are added, this will update in real-time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow border border-green-200">
          <h2 className="text-xl font-semibold text-green-700">Cocoons</h2>
          <p className="text-3xl font-bold text-green-900 mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-green-200">
          <h2 className="text-xl font-semibold text-green-700">Hatchings</h2>
          <p className="text-3xl font-bold text-green-900 mt-2">0</p>
        </div>
      </div>
    </div>
  );
}

