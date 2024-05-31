import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useAuth } from "../../utils/contexts/auth";

const AppLayout = () => {
  const { session, loading } = useAuth();

  if (loading) return <Text>Loading...</Text>;

  if (!session) return <Redirect href="/" />;

  return <Stack />;
};

export default AppLayout;
