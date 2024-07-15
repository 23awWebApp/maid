import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { FontAwesome } from '@expo/vector-icons';
import useSelectedItemStore from '@/store/useSelectedItemStore';
import styles from './CountdownPageStyles';
import { RootStackParamList } from '../types'; // 导入导航参数类型

type CountdownPageRouteProp = RouteProp<RootStackParamList, 'CountdownPage'>;

const CountdownPage: React.FC = () => {
    const route = useRoute<CountdownPageRouteProp>();
    const navigation = useNavigation();
    const { hours, minutes, item } = route.params; // 从路由参数中提取 item
    const totalTime = hours * 3600 + minutes * 60;
    const [time, setTime] = useState(totalTime);
    const [isRunning, setIsRunning] = useState(false);
    const progressAnim = useState(new Animated.Value(0))[0];
    const updateCleaningTime = useSelectedItemStore((state) => state.updateCleaningTime);

    useEffect(() => {
        let timer: NodeJS.Timeout; // 显式声明 timer 的类型
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }

        // Update progress animation
        Animated.timing(progressAnim, {
            toValue: (totalTime - time) / totalTime,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        return () => clearInterval(timer);
    }, [isRunning, time]);

    const handlePauseResume = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTime(totalTime);
        setIsRunning(false);
        progressAnim.setValue(0);
    };

    const handleStop = () => {
        // Update the cleaning time for the item
        updateCleaningTime(item);
        // Navigate back to the MainPage
        navigation.navigate('MainPage' as never); // 确保类型正确
    };

    const goBack = () => {
        navigation.goBack();
    };

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const interpolatedRotateAnimation = progressAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <View style={styles.outerCircle}></View>
                <View style={styles.innerCircle}></View>
                <CircularProgress
                    value={totalTime - time}
                    maxValue={totalTime}
                    radius={140}
                    activeStrokeWidth={2}
                    inActiveStrokeWidth={10}
                    activeStrokeColor={'#00BCD4'}
                    inActiveStrokeColor={'#f0f0f05a'}
                    title={formatTime(time)}
                    titleColor={'#000'}
                    titleStyle={{ fontWeight: 'bold', fontSize: 32 }}
                />
                <Animated.View
                    style={[
                        styles.circleDecorator,
                        {
                            transform: [{ rotate: interpolatedRotateAnimation }],
                        },
                    ]}
                >
                    <View style={styles.circle} />
                </Animated.View>
            </View>
            <View style={styles.controls}>
                <TouchableOpacity onPress={goBack} style={styles.iconButton}>
                    <FontAwesome name="trash" size={25} color="#7A7A7A" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePauseResume} style={styles.iconButton}>
                    <FontAwesome name={isRunning ? "pause" : "play"} size={25} color="#7A7A7A" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset} style={styles.iconButton}>
                    <FontAwesome name="refresh" size={25} color="#7A7A7A" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleStop} style={styles.stopButton}>
                <Text style={styles.stopButtonText}>終了</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CountdownPage;
