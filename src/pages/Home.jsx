import { Link } from "react-router-dom";
import HeroBee from "../assets/mason-bee-circle.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-b from-green-200 to-green-50">
        <img
          src={HeroBee}
          alt="Bee Logo"
          className="w-28 mx-auto mb-6 drop-shadow-xl"
        />

        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          Welcome to the Mason Bee Club
        </h1>

        <p className="text-lg text-green-800 max-w-2xl mx-auto">
          A community of nature lovers helping native mason bees thrive through
          shared data, live camera feeds, educational resources, and
          member-built bee houses across the region.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/stations"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md"
          >
            View Bee Stations
          </Link>
          <Link
            to="/members"
            className="bg-white border border-green-700 text-green-800 px-6 py-3 rounded-lg hover:bg-green-100 shadow"
          >
            Join the Club
          </Link>
        </div>
      </section>



      {/* CLUB INFO + VISUALS */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          What Is the Mason Bee Club?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              🏠 Build & Connect Your Bee House
            </h3>
            <p>
              Members build a club-standard mason bee station equipped with a
              Raspberry Pi, camera module, and sensors. Each station connects to
              the Bee Network and updates your personal dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              📡 Live Monitoring
            </h3>
            <p>
              Watch cocoons hatch, monitor tubes, track environmental stats, and
              receive automated alerts when activity spikes or conditions change.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              🌍 Club-Wide Bee Map
            </h3>
            <p>
              Explore all member stations on an interactive map. View locations,
              stats, and anonymized environmental readings to learn about your
              local ecosystem.
            </p>
          </div>

        </div>
      </section>



      {/* HOW TO GET STARTED */}
      <section className="bg-green-100 py-16 px-10">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
          Interested in Joining?
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6 text-gray-700">
            You can join as a watcher or build your own club-certified bee house.
            We’ll provide build instructions, materials lists, and connection
            steps — including QR activation.
          </p>

          <Link
            to="/members"
            className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 shadow"
          >
            Get Started
          </Link>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="text-center py-6 text-green-900 bg-green-200 mt-10">
        Mason Bee Club © {new Date().getFullYear()} — helping bees, one tube at a time.
      </footer>
    </div>
  );
}
