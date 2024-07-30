import React, { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const tokenSetter = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken_(newToken);
  };

  const contextValue = useMemo(() => {
    return {
      token,
      tokenSetter,
    };
  });

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
