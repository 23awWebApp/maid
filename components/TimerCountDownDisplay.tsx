// TimerCountDownDisplay.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularProgressComponent from "./CircularProgress";

type Props = {
    countDownDate: Date;
    progress: number; // Add the progress prop declaration here
};

export const TimerCountDownDisplay: React.FC<Props> = ({ countDownDate, progress }) => {
    return (
        <View style={styles.container}>
            <CircularProgressComponent size={250} width={10} fill={progress} backgroundColor="#64748B33" tintColor="#1E90FF" />
            <View style={styles.textContainer}>
                <Text style={styles.timerCountDownText}>
                    {countDownDate.getMinutes().toString().padStart(2, "0")}:
                    {countDownDate.getSeconds().toString().padStart(2, "0")}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50,
    },
    textContainer: {
        position: "absolute",
    },
    timerCountDownText: {
        fontWeight: "800",
        fontSize: 40,
        color: "#7A7A7A",
        alignSelf: "center",
    },
});
