import { Outlet, Link } from "react-router-dom";
import BeeLogo from "../assets/mason-bee-circle.png";

export default function Layout() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <nav className="w-full bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <img src={BeeLogo} alt="Bee Logo" className="w-8 h-8" />
          Mason Bee Club
        </h1>

        <div className="space-x-6 font-semibold">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/stations" className="hover:text-yellow-300">Stations</Link>
          <Link to="/join" className="hover:text-yellow-300">Join</Link>
          <Link to="/members" className="hover:text-yellow-300">Members</Link>
          <Link to="/supplies" className="hover:text-yellow-300">Supplies</Link>   {/* ✅ NEW */}
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </div>

      </nav>

      <Outlet />

      <footer className="text-center py-6 text-gray-500">
        © 2025 Mason Bee Club
      </footer>
    </div>
  );
}
