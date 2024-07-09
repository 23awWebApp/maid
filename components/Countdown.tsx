import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Button, ButtonText } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import { TimerCountDownDisplay } from "./TimerCountDownDisplay";
import { TimerModeDisplay, TimerModes } from "./TimerModeDisplay";
import { TimerToggleButton } from "./TimerToggleButton";
import SaveButton from "./SaveButton";

const Timers_TIME_MS = 0.2 * 60 * 1000; // 12 seconds for testing purposes
const Stop_TIME_MS = 0.1 * 60 * 1000; // 6 seconds for testing purposes

export default function CountdownTimer() {
  const navigation = useNavigation(); // Initialize the navigation
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

  const resetCountDown = () => {
    stopCountDown();
    setTimerCount(timerMode === "Timers" ? Timers_TIME_MS : Stop_TIME_MS);
  };

  const goBack = () => {
    navigation.goBack(); // Navigate to the previous page
  };

  // Calculate progress percentage
  const initialTime = timerMode === "Timers" ? Timers_TIME_MS : Stop_TIME_MS;
  const progress = ((initialTime - timerCount) / initialTime) * 100;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: timerMode === "Stop" ? "#2a9d8f" : "#FFF",
      }}
    >
      <StatusBar style="auto" />
      <TimerModeDisplay timerMode={timerMode} />
      <TimerCountDownDisplay countDownDate={new Date(timerCount)} progress={progress} />
      <View style={styles.buttonContainer}>
        <TimerToggleButton
          iconName="arrow-left"
          onPressHandler={goBack} // Go back to the previous page
          isTimerRunning={isTimerRunning}
        />
        <TimerToggleButton
          iconName={isTimerRunning ? "pause" : "play"}
          onPressHandler={isTimerRunning ? stopCountDown : startCountDown} // Pause or play the timer
          isTimerRunning={isTimerRunning}
        />
        <TimerToggleButton
          iconName="refresh"
          onPressHandler={resetCountDown} // Reset the timer
          isTimerRunning={isTimerRunning}
        />
      </View>
      <SaveButton text="Save" href="/tabs/tab2" />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 30,
  },
});
