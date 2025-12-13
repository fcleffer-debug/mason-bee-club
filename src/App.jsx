import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-green-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <NavLink to="/" className="text-2xl font-bold tracking-wide">
            Mason Bee Club
          </NavLink>

          <nav className="flex gap-6 text-lg">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "hover:text-yellow-300"
            }>
              Home
            </NavLink>

            <NavLink to="/stations" className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "hover:text-yellow-300"
            }>
              Stations
            </NavLink>

            <NavLink to="/members" className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "hover:text-yellow-300"
            }>
              Members
            </NavLink>

            <NavLink to="/bee-supplies" className={({ isActive }) =>
              isActive ? "text-yellow-300 underline" : "hover:text-yellow-300"
            }>
              Supplies
            </NavLink>

            {/* Optional Admin/Demo Links */}
            <NavLink to="/dashboard" className="hover:text-yellow-300">
              Dashboard
            </NavLink>

            <NavLink to="/tender" className="hover:text-yellow-300">
              Bee Tender
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
