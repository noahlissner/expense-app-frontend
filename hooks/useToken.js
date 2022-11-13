import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { clearLoginData } from "../util/asyncstorage";
import { useAuthContext } from "../context/AuthContext";
import { tokenKeys } from "./tokenKeys";
import { axiosDefaultInstance } from "../util/axiosUtils";

const getToken = async (user) => {
  const { data } = await axiosDefaultInstance.get(tokenKeys.base.toString());
  return data;
};

export default function useToken(user, enabled, onError) {
  const { setToken, setUser } = useAuthContext();
  const queryCache = useQueryClient();

  const clearData = () => {
    setUser(null).then();
    setToken("").then();
    queryCache.clear();
    clearLoginData().then();
    onError && onError();
  };

  const { isLoading, data, error, refetch } = useQuery(
    tokenKeys.base,
    () => getToken,
    {
      enabled,
      retry: false,
      onError: clearData,
    }
  );

  useEffect(() => {
    if (data?.token) {
      setToken(data.token).then();
    }
  }, []);

  useEffect(() => {
    if (error?.response?.data) {
      console.log(error.response.data);
    }
  }, []);

  return {
    isLoading,
    data,
    refetch,
  };
}
