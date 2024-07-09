import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import CircularProgressComponent from '@/components/CircularProgress';
import { TimerToggleButton } from '@/components/TimerToggleButton';

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
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(time)}</Text>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity onPress={handleReset}>
                    <Text style={styles.controlButton}>リセット</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePauseResume}>
                    <Text style={styles.controlButton}>{isRunning ? '一時停止' : 'Start'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStop}>
                    <Text style={styles.controlButton}>終了</Text>
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
        marginBottom: 20,
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    controlButton: {
        fontSize: 18,
        color: '#00BCD4',
        marginHorizontal: 10,
    },
});

export default CountdownPage;
