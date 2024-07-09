import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";

const CountdownPage: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { hours, minutes } = route.params;
    const [time, setTime] = useState(hours * 3600 + minutes * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const handlePauseResume = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTime(hours * 3600 + minutes * 60);
        setIsRunning(false);
    };

    const handleStop = () => {
        navigation.goBack();
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <CircularProgress
                    value={time}
                    maxValue={hours * 3600 + minutes * 60}
                    radius={150}
                    activeStrokeWidth={10}
                    inActiveStrokeWidth={10}
                    activeStrokeColor={'#00BCD4'}
                    inActiveStrokeColor={'#f0f0f0'}
                    duration={1000}
                    valueSuffix="s"
                    onAnimationComplete={() => setIsRunning(false)}
                />
                <Text style={styles.timerText}>{formatTime(time)}</Text>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity onPress={handleReset} style={styles.iconButton}>
                    <FontAwesome name="refresh" size={25} color="#7A7A7A" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePauseResume} style={styles.iconButton}>
                    <FontAwesome name={isRunning ? "pause" : "play"} size={25} color="#7A7A7A" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStop} style={styles.stopButton}>
                    <Text style={styles.stopButtonText}>終了</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    timerContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
        position: 'absolute',
        top: '45%',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignItems: 'center',
    },
    iconButton: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 10,
    },
    stopButton: {
        backgroundColor: '#00BCD4',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    stopButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default CountdownPage;
