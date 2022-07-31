import React, { useEffect } from "react";
import { useState } from "react";
import userService from "../services/usersService";

export const authContext = React.createContext(null);

//* name the provider.
authContext.displayName = "Auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => {
    setUser(userService.getUser());
  };

  const createUser = (user) => {
    return userService.createUser(user);
  };

  const login = async (credentials) => {
    const response = await userService.loginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    userService.logoutUser();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ user, logout, login, createUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return React.useContext(authContext);
};
