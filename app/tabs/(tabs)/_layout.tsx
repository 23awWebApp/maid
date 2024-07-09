import React from "react";
import { Stack } from "expo-router";

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "index", // 初始頁面
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="Timer" options={{ headerShown: false }} /> */}
      <Stack.Screen name="MainPage" options={{ headerShown: false }} />
      <Stack.Screen name="ShinkiSetting" options={{ headerShown: false }} />
      <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} />
      <Stack.Screen name="TimeSettingPage" options={{ headerShown: false }} />
      <Stack.Screen name="CountdownPage" options={{ headerShown: false }} />
    </Stack>
  );
}
