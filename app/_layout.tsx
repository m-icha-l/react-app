import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screens/screen_1" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
