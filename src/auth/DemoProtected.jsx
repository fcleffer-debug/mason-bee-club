// src/auth/DemoProtected.jsx

import React from "react";

/**
 * DemoProtected simply ALWAYS allows access.
 * It injects a fake user object so components don't crash.
 */
export function DemoProtected({ children }) {
  const fakeUser = {
    id: "demo-user",
    email: "demo@bees.com",
    role: "demo",
  };

  return (
    <DemoAuthContext.Provider value={{ user: fakeUser }}>
      {children}
    </DemoAuthContext.Provider>
  );
}

// create a simple context so useAuth() doesn't explode
import { createContext, useContext } from "react";

const DemoAuthContext = createContext(null);

export function useAuth() {
  return useContext(DemoAuthContext);
}

export default DemoProtected;

