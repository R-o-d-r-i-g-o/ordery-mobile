import React from "react";

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

export interface AuthContextData {
  session?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export interface ContextWapper {
  children: React.ReactNode;
}
