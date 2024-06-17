import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type TimerModes = "Timers" | "Stop";

type Props = {
    timerMode: TimerModes;
};
export const TimerModeDisplay: React.FC<Props> = ({ timerMode }) => {
    return (
        <View style={styles.timerCountDownContainer}>
            <Text style={styles.timerCountDownText}>
                {timerMode} {timerMode === "Stop" ? " 🥦" : "🍅"}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerCountDownContainer: {
        alignItems: "center",
        width: "100%",
    },
    timerCountDownText: {
        fontWeight: "800",
        fontSize: 40,
        color: "7a7a7a",
    },
});