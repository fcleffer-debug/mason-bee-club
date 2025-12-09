//Testing Supabase
import TestSupabase from "./pages/TestSupabase.jsx";


import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "./components/Layout.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import Stations from "./pages/Stations.jsx";
import StationDetail from "./pages/StationDetail.jsx";
import Members from "./pages/Members.jsx";
import About from "./pages/About.jsx";
import BeeSupplies from "./pages/BeeSupplies.jsx";


// Auth Pages
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

// Auth System
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

// Member Dashboard + Subpages (to be created)
import MemberDashboard from "./pages/dashboard/MemberDashboard.jsx";
import MyStation from "./pages/dashboard/MyStation.jsx";
import MyStats from "./pages/dashboard/MyStats.jsx";
import ConnectionStatus from "./pages/dashboard/ConnectionStatus.jsx";
import EditProfile from "./pages/dashboard/EditProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <Home /> },
      { path: "stations", element: <Stations /> },
      { path: "station/:id", element: <StationDetail /> },
      { path: "members", element: <Members /> },
      { path: "supplies", element: <BeeSupplies /> },
      { path: "test-supabase", element: <TestSupabase /> },   // ← ADDED Testing
      { path: "about", element: <About /> },

      // Auth Routes
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },

  // Member Protected Area — requires login
  {
    path: "/member-dashboard",
    element: (
      <ProtectedRoute>
        <MemberDashboard />
      </ProtectedRoute>
    ),

    children: [
      { index: true, element: <MyStation /> },
      { path: "my-station", element: <MyStation /> },
      { path: "my-stats", element: <MyStats /> },
      { path: "connection", element: <ConnectionStatus /> },
      { path: "edit-profile", element: <EditProfile /> },
    ],
  },
]);

export default router;
