import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthContext } from "../context/AuthContext";

export default function useAsyncStorage(key, defaultValue) {
  const { user } = useAuthContext();
  const [value, setValue] = useState(null);
  const uniqueKey = `${user.usedId.toString()}_${key}`;

  useEffect(() => {
    AsyncStorage.getItem(uniqueKey).then((item) => {
      if (item) {
        setValue(JSON.parse(item));
      } else {
        setValue(defaultValue);
      }
    });
  }, [defaultValue, uniqueKey]);

  const setAsyncValue = (item) => {
    setValue(item);
    AsyncStorage.setItem(uniqueKey, JSON.stringify(item)).then();
  };

  return [value, setAsyncValue];
}
