import { Outlet, NavLink } from "react-router-dom";


export function TenderLayout() {
  return (
    <div className="min-h-screen flex bg-green-50">

      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Bee Tender</h2>

        <nav className="flex flex-col gap-3 text-lg">
          <NavLink
            to="/tender/station"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/tender/live"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Live View
          </NavLink>

          <NavLink
            to="/tender/settings"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Settings
          </NavLink>

          <NavLink
            to="/tender/diagnostics"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Diagnostics
          </NavLink>

          <NavLink
            to="/tender/logs"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            Logs
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

