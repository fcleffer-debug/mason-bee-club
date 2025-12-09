import { useParams } from "react-router-dom";
import { stations } from "../data/stations";

export default function StationDetail() {
  const { id } = useParams();
  const station = stations.find((s) => s.id === id);

  if (!station) {
    return <h1>Station not found.</h1>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{station.name}</h1>

      <p><strong>Status:</strong> {station.status}</p>
      <p><strong>Location:</strong> {station.location}</p>
      <p><strong>Build Type:</strong> {station.buildType}</p>
      <p><strong>Environment:</strong> {station.environment}</p>
      <p><strong>Serial Number:</strong> {station.serial}</p>
      <p><strong>Software Version:</strong> {station.software}</p>

      <h2 className="text-xl font-semibold mt-6">Sensors</h2>
      <ul className="list-disc ml-6">
        <li>Temperature: {station.sensors.temperature ? "Yes" : "No"}</li>
        <li>Humidity: {station.sensors.humidity ? "Yes" : "No"}</li>
        <li>Light: {station.sensors.light ? "Yes" : "No"}</li>
        <li>Camera: {station.sensors.camera}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Bee Activity</h2>
      <p>Cocoon Count: {station.cocoonCount}</p>
      <p>Activity Score: {station.activity}</p>

      {station.clips.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-6">Recent Video Clips</h2>
          {station.clips.map((clip, index) => (
            <video key={index} src={clip} controls className="my-4 w-full max-w-lg" />
          ))}
        </>
      )}
    </div>
  );
}
