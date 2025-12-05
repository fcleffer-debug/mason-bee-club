import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on startup
  useEffect(() => {
    const stored = localStorage.getItem("beeUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("beeUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("beeUser");
    }
  }, [user]);

  const login = (email, password) => {
    // Simple demo user lookup
    const fakeUser = { email };
    setUser(fakeUser);
  };

  const signup = (email, password) => {
    const newUser = { email };
    setUser(newUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

