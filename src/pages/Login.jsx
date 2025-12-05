import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/member-dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4 border border-green-200"
      >
        <h2 className="text-2xl font-bold text-green-700">Member Login</h2>

        <input
          className="w-full p-3 border rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 border rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
          Login
        </button>

        <p className="text-center text-sm">
          No account?{" "}
          <Link to="/signup" className="text-green-700 underline">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}

