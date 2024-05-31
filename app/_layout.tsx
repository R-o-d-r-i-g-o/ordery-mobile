import { Slot } from "expo-router";
import { ThemeProvider } from "styled-components";

import { AuthProvider as SessionProvider } from "../utils/contexts/auth";
import { defaultTheme } from "../utils/themes";

export default () => (
  <ThemeProvider theme={defaultTheme}>
    <SessionProvider>
      <Slot />
    </SessionProvider>
  </ThemeProvider>
);
