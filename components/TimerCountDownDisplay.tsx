import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    countDownDate: Date;
};

export const TimerCountDownDisplay: React.FC<Props> = ({ countDownDate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.timerCountDownText}>
                {countDownDate.getMinutes().toString().padStart(2, "0")}:
                {countDownDate.getSeconds().toString().padStart(2, "0")}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    timerCountDownText: {
        fontWeight: "800",
        fontSize: 40,
        color: "#fff",
        alignSelf: "center",
    },
    container: {
        borderWidth: 5,
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        justifyContent: "center",
        borderColor: "#fff",
        marginVertical: 50,
    },

});
