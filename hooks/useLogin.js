import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useToken from "./useToken";
import { axiosDefaultInstance } from "../util/axiosUtils";
import { useAuthContext } from "../context/AuthContext";

const usernameLogin = async (loginData) => {
  const { data } = await axiosDefaultInstance.post("/login", loginData);
  return data;
};

export default function useLogin() {
  const { setUser, setToken } = useAuthContext();
  const [loggedInUser, setLoggedInUser] = useState(null);

  const onLoginSuccess = (user) => {
    // console.log(user);
    if (user) {
      setLoggedInUser({ ...user });
      setUser({ ...user }).then();
      setToken(user.token);
    }
  };

  const {
    mutateAsync,
    isLoading: loginLoading,
    error: loginError,
  } = useMutation(usernameLogin, {
    onSuccess: onLoginSuccess,
  });

  const { isLoading: tokenLoading } = useToken(loggedInUser);

  useEffect(() => {
    if (loginError?.response?.data) {
      console.log(loginError.response.data);
    }
  }, [loginError]);

  return { dispatch: mutateAsync, isLoading: loginLoading || tokenLoading };
}
