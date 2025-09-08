import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false, // Hides the "(tabs)" layout header
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}
