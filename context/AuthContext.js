import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLoggedInUser,
  getToken,
  storeLoggedInUser,
  storeToken,
} from "../util/asyncstorage";
import { configureTokenHeader } from "../util/axiosUtils";

const defaultValue = {
  token: "",
  setToken: null,
  user: "",
  setUser: null,
  initialized: false,
};

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState("");
  const [user, setUserState] = useState(null);
  const [initialized, setInitialized] = useState(false);

  const getAuthToken = async () => {
    try {
      getToken().then((t) => {
        setTokenState(t);
        configureTokenHeader(t);
      });
    } catch (e) {
      setTokenState("");
    }
  };

  const getAuthUser = async () => {
    try {
      getLoggedInUser().then((u) => {
        return setUserState(u);
      });
    } catch (e) {
      setUserState(null);
    }
  };

  const setToken = async (t) => {
    try {
      await storeToken(t);
      configureTokenHeader(t);
      setTokenState(t);
    } catch (e) {
      await Promise.reject(e);
    }
  };

  const setUser = async (u) => {
    try {
      await storeLoggedInUser(u);
      setUserState(u);
    } catch (e) {
      await Promise.reject(e);
    }
  };

  useEffect(() => {
    Promise.all([getAuthToken(), getAuthUser()]).then(() => {
      setInitialized(true);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, initialized }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthContext provider");
  }

  return context;
};

export { AuthProvider, useAuthContext };
