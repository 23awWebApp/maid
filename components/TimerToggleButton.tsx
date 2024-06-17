import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  onPressHandler: () => void;
  isTimerRunning: boolean;
  iconName: string; // Add iconName prop
};

export const TimerToggleButton: React.FC<Props> = ({
  onPressHandler,
  iconName,
}) => {
  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <View style={styles.container}>
        <FontAwesome
          style={styles.icon}
          name={iconName}
          size={25}
          color="#7A7A7A"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 75,
    height: 75,
    borderRadius: 250 / 2,
    justifyContent: "center",
    borderColor: "#7A7A7A",
    marginVertical: 50,
  },
  icon: { alignSelf: "center" },
});
