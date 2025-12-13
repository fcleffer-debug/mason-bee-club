import { useStation } from "../../hooks/useStation";

export function MyStation() {
  const { data } = useStation();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-800">Bee Tender Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="font-semibold text-lg">Temperature</h2>
          <p className="text-3xl text-green-700">{data.temperature.toFixed(1)}°F</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="font-semibold text-lg">Humidity</h2>
          <p className="text-3xl text-green-700">{data.humidity.toFixed(1)}%</p>
        </div>

        <div className="bg-white shadow p-4 rounded-xl">
          <h2 className="font-semibold text-lg">BeeNet</h2>
          <p className={data.beenet_online ? "text-green-600" : "text-red-600"}>
            {data.beenet_online ? "Online" : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
}
