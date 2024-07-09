import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CountdownTimer from "@/components/Countdown";

const TimerPage: React.FC = () => {
    const route = useRoute();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <CountdownTimer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TimerPage;
