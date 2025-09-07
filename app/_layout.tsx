import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false, // Hides the "(tabs)" layout header
          }}
        />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
