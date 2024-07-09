import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TimeSettingPage: React.FC = () => {
    const navigation = useNavigation();
    const [selectedHours, setSelectedHours] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);

    const handleStart = () => {
        navigation.navigate('CountdownPage', { hours: selectedHours, minutes: selectedMinutes });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>タイマー</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedHours}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    onValueChange={(itemValue) => setSelectedHours(itemValue)}
                >
                    {[...Array(24).keys()].map((hour) => (
                        <Picker.Item key={hour} label={`${hour}`} value={hour} />
                    ))}
                </Picker>
                <Text style={styles.pickerLabel}>時</Text>
                <Picker
                    selectedValue={selectedMinutes}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
                >
                    {[...Array(60).keys()].map((minute) => (
                        <Picker.Item key={minute} label={`${minute}`} value={minute} />
                    ))}
                </Picker>
                <Text style={styles.pickerLabel}>分</Text>
            </View>
            <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                <Text style={styles.startButtonText}>スタート</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        position: 'absolute',
        top: '40px',
        left: '20px',

    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,

    },
    picker: {
        height: 200,
        width: 80,
        color: '#7a7a7a',
        borderWidth: 0,
    },
    pickerItem: {
        fontSize: 24,
    },
    pickerLabel: {
        fontSize: 24,
        marginHorizontal: 10,
        color: '#7a7a7a',
    },
    startButton: {
        backgroundColor: '#00BCD4',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
    },
    startButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default TimeSettingPage;
