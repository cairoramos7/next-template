import { useState } from "react";

type IUser = {
    name: string;
    permissions: string[];
    isAdmin: boolean;
    token: string;
}

type ILogin = {
    login: string
    password: string
}

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;

  const login = (_: ILogin) => {
    const response = {
      name: "Jhon",
      permissions: [""],
      isAdmin: true,
      token: "token",
    };

    setUser(response);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};
