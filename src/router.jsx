import { createBrowserRouter } from "react-router-dom";

// Layout
import App from "./App.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Stations from "./pages/Stations.jsx";
import Join from "./pages/Join.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import BeeSupplies from "./pages/BeeSupplies.jsx";

// Member area
import Members from "./pages/Members.jsx";
import MemberPortal from "./pages/MemberPortal.jsx";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import MemberMyStation from "./pages/member/MyStation.jsx";
import MemberMyStats from "./pages/member/MyStats.jsx";
import EditProfile from "./pages/member/EditProfile.jsx";
import ConnectionStatus from "./pages/member/ConnectionStatus.jsx";

// Tender pages
import { TenderLayout } from "./pages/tender/TenderLayout.jsx";
import { MyStation as TenderMyStation } from "./pages/tender/MyStation.jsx";
import { Logs } from "./pages/tender/Logs.jsx";
import { StationSettings } from "./pages/tender/StationSettings.jsx";
import { Diagnostics } from "./pages/tender/Diagnostics.jsx";
import { LiveView } from "./pages/tender/LiveView.jsx";

// Temporary stubbed “always logged in”
import { DemoProtected as ProtectedRoute } from "./auth/DemoProtected.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // -----------------------------
      // PUBLIC SITE
      // -----------------------------
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "join", element: <Join /> },
      { path: "stations", element: <Stations /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "bee-supplies", element: <BeeSupplies /> },

      // -----------------------------
      // MEMBER AREA
      // -----------------------------
      {
        path: "members",
        element: (
          <ProtectedRoute>
            <MemberPortal />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <MemberDashboard /> },
          { path: "dashboard", element: <MemberDashboard /> },
          { path: "my-station", element: <MemberMyStation /> },
          { path: "my-stats", element: <MemberMyStats /> },
          { path: "edit-profile", element: <EditProfile /> },
          { path: "connection", element: <ConnectionStatus /> },
        ],
      },

      // -----------------------------
      // BEE TENDER PANEL
      // -----------------------------
      {
        path: "tender",
        element: (
          <ProtectedRoute>
            <TenderLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <TenderMyStation /> },
          { path: "station", element: <TenderMyStation /> },
          { path: "settings", element: <StationSettings /> },
          { path: "live", element: <LiveView /> },
          { path: "diagnostics", element: <Diagnostics /> },
          { path: "logs", element: <Logs /> },
        ],
      },
    ],
  },
]);

export default router;
