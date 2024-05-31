import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { authService } from "../../service/auth";
import { BASE_AUTH } from "../../constants";

import * as t from "./types";

export const AuthContext = createContext({} as t.AuthContextData);

export const AuthProvider = ({ children }: t.ContextWapper) => {
  const [authData, setAuthData] = useState<t.AuthData>();
  const [loading, setLoading] = useState(true);

  const loadFromStorage = async () => {
    const auth = await AsyncStorage.getItem(BASE_AUTH);

    if (auth) setAuthData(JSON.parse(auth) as t.AuthData);
    setLoading(false);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const auth = await authService.signIn(email, password);
      AsyncStorage.setItem(BASE_AUTH, JSON.stringify(auth));
      setAuthData(auth);
    } catch (error: any) {
      Alert.alert(error.message, "tente novamente");
    }
  };

  const signOut = async (): Promise<void> => {
    AsyncStorage.removeItem(BASE_AUTH);
    setAuthData(undefined);
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ session: authData, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
