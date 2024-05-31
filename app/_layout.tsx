import { Slot } from "expo-router";
import { AuthProvider as SessionProvider } from "../utils/contexts/auth";

export default () => (
  <SessionProvider>
    <Slot />
  </SessionProvider>
);
