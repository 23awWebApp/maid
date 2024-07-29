import React from "react";
import { Stack } from "expo-router";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "MainPage", // Initial page
};

export default function AppLayout() {
  const screens = [
    { name: "Shinki", headerShown: false },
    // { name: "Timer", headerShown: false }, // Uncomment if needed
    { name: "MainPage", headerShown: false },
    { name: "ShinkiSetting", headerShown: false },
    { name: "LoadingScreen", headerShown: false },
    { name: "LoadingScreen2", headerShown: false },
    { name: "TimeSettingPage", headerShown: false },
    { name: "CountdownPage", headerShown: false },
  ];

  return (
    <Stack>
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={{ headerShown: screen.headerShown }}
        />
      ))}
    </Stack>
  );
}
