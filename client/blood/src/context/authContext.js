import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (onSuccess) => {
    setIsAuthenticated(true);
    if (onSuccess) onSuccess(); // Invoke callback after login
  };

  const logout = (onSuccess) => {
    setIsAuthenticated(false);
    if (onSuccess) onSuccess(); // Invoke callback after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
