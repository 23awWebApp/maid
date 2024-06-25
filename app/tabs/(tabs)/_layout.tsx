import React from "react";
import { Stack } from "expo-router";

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "index", // 設定你希望的初始頁面
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="tab1" options={{ headerShown: false }} />
      <Stack.Screen name="MainPage" options={{ headerShown: false }} />
      <Stack.Screen name="ShinkiSetting" options={{ headerShown: false }} />
      <Stack.Screen name="LoadingScreen" options={{ headerShown: false }} />
    </Stack>
  );
}
