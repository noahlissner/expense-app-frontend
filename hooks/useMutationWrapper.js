import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import useToken from "./useToken";
import { useAuthContext } from "../context/AuthContext";

export default function useMutationWrapper(mutationFn, queryConfig) {
  const { user } = useAuthContext();
  const { mutateAsync, isLoading, data, error } = useMutation(
    mutationFn,
    queryConfig
  );
  const { refetch: fetchToken } = useToken(user);

  useEffect(() => {
    if (error?.response?.status === "401") {
      fetchToken().then((response) => {
        if (response.isSuccess) {
          mutateAsync(mutationFn, queryConfig).then();
        }
      });
    }
  }, [error]);

  return { mutateAsync, isLoading, data, error };
}
