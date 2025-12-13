import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Hard-coded demo user
  const [user] = useState({
    id: "demo-user-123",
    email: "demo@beetender.com",
    role: "tender",
    demo: true
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
