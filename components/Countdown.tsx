import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { TimerCountDownDisplay } from "./TimerCountDownDisplay";
import { TimerModeDisplay, TimerModes } from "./TimerModeDisplay";
import { TimerToggleButton } from "./TimerToggleButton";

const Timers_TIME_MS = 0.1 * 60 * 1000; // 12 seconds for testing purposes
const Stop_TIME_MS = 0.1 * 60 * 1000; // 6 seconds for testing purposes

export default function CountdownTimer() {
  const [timerCount, setTimerCount] = useState<number>(Timers_TIME_MS);
  const [timerMode, setTimerMode] = useState<TimerModes>("Timers");
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === "Timers") {
        setTimerMode("Stop");
        setTimerCount(Stop_TIME_MS);
      } else {
        setTimerMode("Timers");
        setTimerCount(Timers_TIME_MS);
      }
      stopCountDown();
    }
  }, [timerCount]);

  const startCountDown = () => {
    setIsTimerRunning(true);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => setTimerCount((prev) => prev - 1000), 1000) as unknown as number;
  };

  const stopCountDown = () => {
    setIsTimerRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: timerMode === "Stop" ? "#2a9d8f" : "#d95550",
      }}
    >
      <StatusBar style="auto" />
      <TimerModeDisplay timerMode={timerMode} />

      <TimerCountDownDisplay countDownDate={new Date(timerCount)} />
      <TimerToggleButton
        startCountDownHandler={startCountDown}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        stopCountDownHandler={stopCountDown}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
