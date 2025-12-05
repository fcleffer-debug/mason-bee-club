 import { Outlet, NavLink } from "react-router-dom";

export default function MemberDashboard() {
  return (
    <div className="min-h-screen flex bg-green-50">

      {/* SIDEBAR */}
      <aside className="w-64 bg-green-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-6">My Bee Station</h2>

        <nav className="flex flex-col space-y-3 text-lg">
          <NavLink
            to="/member-dashboard/my-station"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            🏡 My Station
          </NavLink>

          <NavLink
            to="/member-dashboard/my-stats"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            📊 My Stats
          </NavLink>

          <NavLink
            to="/member-dashboard/connection"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            📡 Network Status
          </NavLink>

          <NavLink
            to="/member-dashboard/edit-profile"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-300" : "hover:text-yellow-300"
            }
          >
            👤 Edit Profile
          </NavLink>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}

